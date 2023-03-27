import fetch from "node-fetch"
import * as Meta from "@dashkite/joy/metaclass"
import * as Text from "@dashkite/joy/text"
import r from "./request"

class XanoError extends Error
  constructor: ( response, message ) ->
    super( message )
    @response = response
    @status = response.status

success = ( status, response ) ->
  if response.status != status
    throw new XanoError response, 
      "xano-helpers: unexpected response status #{ response.status }"


class Base

  @create: ( _ ) ->
    _.resource = Text.underscore _.name
    Object.assign ( new @ ), { _ }

  Meta.mixin @::, [
    Meta.getters
      id: -> @_.id
      name: -> @_.name
      baseURL: -> @_.api
      swaggerURL: -> @_.swaggerspec
      resource: -> @_.resource
  ]

  loadSwagger: ->
    response = await fetch @swaggerURL
    console.log await response.json()

  list: ( config = {} )->
    request = r.createRequest [
      r.base @baseURL
      r.path "/#{ @resource }"
      r.method "get"
      r.query config.query
      r.headers {
        Accept: "application/json"
        config.headers...
      }
      r.token config.token
    ]
   
    response = await request.issue()
    success 200, response
    await response.json()

  add: ( config = {} ) ->
    request = r.createRequest [
      r.base @baseURL
      r.path "/#{ @resource }"
      r.method "post"
      r.query config.query
      r.content config.content
      r.headers {
        Accept: "application/json"
        config.headers...
      }
      r.token config.token
    ]
   
    response = await request.issue()
    success 200, response
    await response.json()

  get: ( config = {} ) ->
    # TODO: Is there a convention we like more here?
    id = encodeURIComponent config.id

    request = r.createRequest [
      r.base @baseURL
      r.path "/#{ @resource }/#{ id }"
      r.method "get"
      r.query config.query
      r.headers {
        Accept: "application/json"
        config.headers...
      }
      r.token config.token
    ]
   
    response = await request.issue()
    return if response.status == 404
    success 200, response
    await response.json()

  update: ( config = {} ) ->
    # TODO: Is there a convention we like more here?
    id = encodeURIComponent config.content.id

    request = r.createRequest [
      r.base @baseURL
      r.path "/#{ @resource }/#{ id }"
      r.method "post"
      r.query config.query
      r.content config.content
      r.headers {
        Accept: "application/json"
        config.headers...
      }
      r.token config.token
    ]
   
    response = await request.issue()
    success 200, response
    await response.json()

  delete: ( config = {} ) ->
    # TODO: Is there a convention we like more here?
    id = encodeURIComponent config.id

    request = r.createRequest [
      r.base @baseURL
      r.path "/#{ @resource }/#{ id }"
      r.method "delete"
      r.query config.query
      r.headers {
        Accept: "application/json"
        config.headers...
      }
      r.token config.token
    ]
   
    response = await request.issue()
    success 200, response
    await response.json()


export {
  Base
}