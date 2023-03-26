import fetch from "node-fetch"
import * as Meta from "@dashkite/joy/metaclass"
import * as Text from "@dashkite/joy/text"

class XanoError extends Error
  constructor: ( response, message ) ->
    super( message )
    @response = response
    @status = response.status


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

  list: ->
    url = "#{ @baseURL }/#{ @resource }"
    options =
      method: "GET"
      headers:
        Accept: "application/json"
   
    response = await fetch url, options
    if response.status != 200
      throw new XanoError response, "xano-helpers: unexpected response status"

    await response.json()

  add: ( data = {} ) ->
    url = "#{ @baseURL }/#{ @resource }"
    options =
      method: "POST"
      headers:
        "Content-Type": "application/json"
        Accept: "application/json"
      body: JSON.stringify data

    response = await fetch url, options
    if response.status != 200
      throw new XanoError response, "xano-helpers: unexpected response status"

    await response.json()

  get: ( id ) ->
    url = "#{ @baseURL }/#{ @resource }/#{ encodeURIComponent id }"
    options =
      method: "GET"
      headers:
        Accept: "application/json"

    response = await fetch url, options
    if response.status == 404
      return undefined
    if response.status != 200
      throw new XanoError response, "xano-helpers: unexpected response status"

    await response.json()

  update: ( data ) ->
    url = "#{ @baseURL }/#{ @resource }/#{ encodeURIComponent data.id }"
    options =
      method: "POST"
      headers:
        "Content-Type": "application/json"
        Accept: "application/json"
      body: JSON.stringify data

    response = await fetch url, options
    if response.status != 200
      throw new XanoError response, "xano-helpers: unexpected response status"
    
    await response.json()

  delete: ( id ) ->
    url = "#{ @baseURL }/#{ @resource }/#{ encodeURIComponent id }"
    options =
      method: "DELETE"
      headers: {}
    
    response = await fetch url, options
    if response.status != 200
      throw new XanoError response, "xano-helpers: unexpected response status"

    await response.json()


export {
  Base
}