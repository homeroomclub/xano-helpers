import fetch from "node-fetch"
import * as Meta from "@dashkite/joy/metaclass"

class Workspace

  @create: ( _ ) ->
    Object.assign ( new @ ), { _ }

  Meta.mixin @::, [
    Meta.getters
      groups: -> @_.apigroups
  ]


export {
  Workspace
}