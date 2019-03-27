const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend: true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/',(req,res) => {
  res.json({'message': 'Welcome to the to-do app. Create a list of to dos.'})
})

// listen to requests
app.listen(port, ()=> {
  console.log(`Server is listening on ${port}`)
})
