import { confidential } from "panda-confidential"

Confidential = confidential()

random = ( config = {} ) ->
  { length = 16, encoding = "base36" } = config

  Confidential.convert from: "bytes", to: encoding, 
    await Confidential.randomBytes length

export {
  random
}