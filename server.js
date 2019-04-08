const express = require('express')

const port = process.env.PORT || 8000
const middleware = require('./app/middleware')

// create express app
const app = express();


middleware.before(app)

// // configuring the database
const database = require('./config/database')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/on-track-api-test'

//Connect to database
  mongoose.connect(MONGODB_URI, {
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

// Require todo routes
require('./app/routes/todo.js')(app);

middleware.after(app)

// listen to requests
app.listen(port, ()=> {
  console.log(`Server is listening on ${port}`)
})
