import fetch from "node-fetch"
import * as Meta from "@dashkite/joy/metaclass"
import { getSecret } from "@dashkite/dolores/secrets"
import { Instance } from "./instance"
import { Workspace } from "./workspace"
import { Base } from "./base"

class Xano

  @create: ( options = {} ) ->
    developerToken = await getSecret options.secret
    self = Object.assign ( new @ ), _: { developerToken, options }
    await self.load()
    self

  Meta.mixin @::, [
    Meta.getters
      options: -> @_.options
      developerToken: -> @_.developerToken
      instance: -> @_.instance
      workspace: -> @_.workspace
      bases: -> @_.bases
  ]

  getInstances: ->
    url = "https://app.xano.com/api:developer/instance"
    options = 
      method: "GET"
      headers:
        Accept: "application/json"
        Authorization: "Bearer #{ @developerToken }"

    response = await fetch url, options

    if response.status != 200
      throw new Error "Failed to fetch Xano account instances"

    await response.json()

  loadInstance: ->
    instance = ( await @getInstances() )
      .find ( instance ) => instance.display == @options.instance

    if !instance?
      throw new Error "Did not locate a Xano instance with display name #{@options.instance}"

    @_.instance = await Instance.create instance

  loadWorkspace: ->
    workspace = ( await @instance.getWorkspaces() )
      .find ( workspace ) => workspace.name == @options.workspace

    if !workspace?
      throw new Error "Did not locate a Xano workspace with name #{ @options.workspace }"
    
    @_.workspace = await Workspace.create workspace

  loadBases: ->
    @_.bases = {}
    for base in @options.bases
      match = @workspace.groups.find ( group ) -> group.name == base
      if !match?
        throw new Error "Did not locate a Xano base with name #{ base }"

      @bases[ base ] = Base.create match   
      

  load: ->
    await @loadInstance()
    await @loadWorkspace()
    await @loadBases()

export {
  Xano
}