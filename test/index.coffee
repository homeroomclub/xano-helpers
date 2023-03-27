import { test as _test, success } from "@dashkite/amen"
import print from "@dashkite/amen-console"
import assert from "@dashkite/assert"
import * as h from "./helpers"

import configuration from "./configuration"

import { Xano } from "../src"

test = (name, f) ->
  _test
    description: name
    wait: 30000
    f

do ({ xano, base, token, person } = {}) ->

  print await _test "Xano Helpers", [

    await test "setup", ->
      xano = await Xano.create configuration.xano
      assert ( Object.keys xano.bases ).length > 0
      base = xano.bases[ "TestPeople" ]
      token = await h.authenticate configuration

    await test "add record", ->
      person = await base.add
        token: token
        content:
          first_name: "David"
          last_name: "Test"
          workspace: await h.random()

      assert person?

    await test "list records", ->
      list = await base.list { token }
      match = list.find ( record ) -> record.id == person.id
      assert match?

    await test "get record", ->
      _person = await base.get 
        token: token
        id: person.id

      assert.deepEqual person, _person

    await test "update record", ->
      _person = await base.update
        token: token
        content: {
          person...
          last_name: "Updated"
        }

      assert.equal person.id, _person.id
      assert.equal "Updated", _person.last_name

    await test "delete record", ->
      await base.delete 
        token: token
        id: person.id
      
      _person = await base.get 
        token: token
        id: person.id
      
      assert !_person?

  ]

  
  process.exit success