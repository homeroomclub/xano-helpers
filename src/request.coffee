import * as Fn from "@dashkite/joy/function"
import * as Type from "@dashkite/joy/type"
import fetch from "node-fetch"


h = {}

h.base = Fn.curry Fn.rtee ( base, context ) ->
  context.base = base

h.path = Fn.curry Fn.rtee ( path, context ) ->
  context.path = path

h.query = Fn.curry Fn.rtee ( query, context ) ->
  context.query = query

h.method = Fn.curry Fn.rtee ( method, context ) ->
  context.method = method

h.content = Fn.curry Fn.rtee ( content, context ) ->
  context.content = content

h.headers = Fn.curry Fn.rtee ( headers, context ) ->
  context.headers ?= {}
  Object.assign context.headers, headers

h.token = Fn.curry Fn.rtee ( token, context ) ->
  context.headers ?= {}
  Object.assign context.headers, Authorization: "Bearer #{ token }"

h.createRequest = ( fx ) ->
  issue: ->
    context = do Fn.pipe [
      -> {}
      fx...
    ]

    { base, path, query, method, content, headers } = context

    url = new URL "#{ base }#{ path }"
    if query?
      for key, value of query
        URL.searchParams.set key, value

    options =
      method: method.toUpperCase()
      headers: headers

    if content?
      if Type.isObject content
        options.body = JSON.stringify content
        if !options.headers[ "Content-Type" ]?
          options.headers[ "Content-Type" ] = "application/json"
      else
        options.body = content

    # console.log url.href, options

    # Return Response instance from Fetch.
    await fetch url.href, options


export default h