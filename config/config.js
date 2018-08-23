'use strict';
const apiPort   = 8086 // This is the port where node API runs
// const defaultURL = "http://localhost:" + apiPort // This is the api endpoint
      // defaultURL   = "" // if modified here it means it is for production mode

const deliveryEmail = "jonathan@asoftio.com" // This is the email where forms messages will be delivered

const conf = {
  defaultURL,
  deliveryEmail,
  apiPort
}

export default conf;