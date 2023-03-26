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

do ({ xano, base, person } = {}) ->

  print await _test "Xano Helpers", [

    await test "setup", ->
      xano = await Xano.create configuration.xano
      assert ( Object.keys xano.bases ).length > 0
      base = xano.bases[ "TestPeople" ]

    await test "add record", ->
      person = await base.add
        first_name: "David"
        last_name: "Test"
        workspace: await h.random()

    await test "list records", ->
      list = await base.list()
      match = list.find ( record ) -> record.id == person.id
      assert match?

    await test "get record", ->
      _person = await base.get person.id
      assert.deepEqual person, _person

    await test "update record", ->
      _person = await base.update {
        person...
        last_name: "Updated"
      }

      assert.equal person.id, _person.id
      assert.equal "Updated", _person.last_name

    await test "delete record", ->
      await base.delete person.id
      _person = await base.get person.id
      assert !_person?

  ]

  
  process.exit success