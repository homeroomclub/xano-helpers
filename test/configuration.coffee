import _configuration from "./_configuration"

environment = process.env.mode ? "development"

console.log "Loading configuration for #{environment}"
configuration = _configuration[ environment ]

configuration.outseta =
  email: process.env.email
  password: process.env.password

if !configuration.outseta.email? || !configuration.outseta.password?
  throw new Error "Outseta credentials are not available to support authentication."

export default configuration