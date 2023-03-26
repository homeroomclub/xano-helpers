import fetch from "node-fetch"
import * as Meta from "@dashkite/joy/metaclass"

class Instance

  @create: ( _ ) ->
    response = await fetch _.tokenUrl
    _ = await response.json()
    Object.assign ( new @ ), { _ }

  Meta.mixin @::, [
    Meta.getters
      token: -> @_.authToken
      baseURL: -> @_.origin
  ]

  getWorkspaces: ->
    url = "#{ @baseURL }/api:developer/workspace"
    options =
      method: "GET"
      headers:
        Accept: "application/json"
        Authorization: "Bearer #{ @token }"

    response = await fetch url, options
    if response.status != 200
      throw new Error "non-200 response when fetching workspaces"

    @_.workspaces = await response.json()

  

 
export {
  Instance
}