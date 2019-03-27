module.exports = app => {
  const listitems = require('../controllers/listitem')

  // create a new listitem
  app.post('/listitems', listitems.create)

  // retrieve all listitems
  app.get('/listitems', listitems.index)

  // get a single listitem  with id
  app.get('/listitems/:id', listitems.show)

  // update a listitem with id
  app.put('/listitems/:id', listitems.update)

  // delete a listitem with id
  app.delete('/listitems/:id', listitems.delete)
}
