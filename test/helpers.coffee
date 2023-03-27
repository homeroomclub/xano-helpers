import fetch from "node-fetch"
import { confidential } from "panda-confidential"

Confidential = confidential()

random = ( config = {} ) ->
  { length = 16, encoding = "base36" } = config

  Confidential.convert from: "bytes", to: encoding, 
    await Confidential.randomBytes length

authenticate = ( configuration ) ->
  url = "https://homeroomclub.outseta.com/api/v1/tokens"
  options =
    method: "POST"
    headers:
      "Content-Type": "application/json"
    body: JSON.stringify
      username: configuration.outseta.email
      password: configuration.outseta.password

  response = await fetch url, options
  console.log "authenticate with outseta", response.status
  outseta = await response.json()


  url = new URL "https://omega.homeroom.run/api:outseta/outseta/auth"
  url.searchParams.set "token", outseta.access_token
  options =
    method: "POST"

  response = await fetch url.href, options
  console.log "exchange with xano", response.status
  xano = await response.json()
  xano.authToken


export {
  random
  authenticate
}