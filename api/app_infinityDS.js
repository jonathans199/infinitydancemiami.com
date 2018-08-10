const express   = require('express')
var bodyParser  = require('body-parser')
var cors = require('cors')
var history = require('connect-history-api-fallback');

const app       = express()
app.use(history())

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
app.use(cors())
app.use('/', express.static('./../html'))

app.post('/api/contact', (req, res) => {
  let api_key   = 'key-42b17e5481a2ad150c8d44defc8f08ff'
  let domain    = 'mg.asoftio.com'
  let mailgun   = require('mailgun-js')({apiKey: api_key, domain: domain})
  let name    = req.body.name
  let lastName    = req.body.lastName
  let email   = req.body.email
  let phone   = req.body.phone
  let message = req.body.message

  var data      = {
    from: 'no-reply@infinitydancemiami.com',
    to:   'mdiaz00147@gmail.com',
    subject: 'Contact from your - infinitydancemiami.com',
    html: ('<h2>Contact form website</h2><br> Email: ' + email + '<br> Name: ' + name + ' ' + lastName + '<br> Phone: ' + phone + '<br> Message: ' + message)
  }

  if(name && email && phone) {
    let response = mailgun.messages().send(data, function (error, body) { return body })
    res.send({ m: 'Contact successfully sent' })
  } else {
    res.status(500).send({ m: 'Some error ocurred' })
  }
})

app.listen(8086, () => console.log('Listening'))