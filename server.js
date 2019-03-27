const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extend: true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// configuring the database
const dbConfig = require('./config/database')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

//Connect to database
mongoose.connect(dbConfig.uri, {
  useNewUrlParser: true
}).then(() => {
  console.log('Successfully connected to the database')
}).catch((err) => {
  console.log('Could not connect to the database. Exiting process...', err)
  process.exit()
})

app.get('/',(req,res) => {
  res.json({'message': 'Welcome to the to-do app. Create a list of to dos.'})
})

// Require item routes
require('./app/routes/item.js')(app);

// listen to requests
app.listen(port, ()=> {
  console.log(`Server is listening on ${port}`)
})
