declare global {
    namespace NodeJS {
      interface ProcessEnv {
        DATABASE: string,
        SMTPHOST: string,
        SMTPUSER: string,
        OAUTH2CLIENTID: string,
        OAUTH2CLIENTSECRET: string,
        OAUTH2REFRESHTOKEN: string,
        OAUTH2ACCESSTOKEN: string,
        DOMAIN: string,
        JWTSECRET: string
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}