
// This is where the front end connects to make api calls
let defaultURL      = "http://localhost:8086"
    // if defined here it means it is for production mode
    defaultURL      = ""
// This is the email where the forms will be delivered
let deliveryEmail   = 'mdiaz00147@gmail.com'
 

module.exports = {
  defaultURL: defaultURL,
  deliveryEmail: deliveryEmail
}