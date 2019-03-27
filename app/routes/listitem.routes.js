module.exports = app => {
  const listitems = require('../controllers/listitem')

  // create a new listitem
  app.post('/listitems', listitems.create)

  // retrieve all listitems
  app.get('listitems', listitems.index)

  // get a single listitem  with listitemId
  app.get('listitems/:listitemId', listitems.show)

  // update a listitem with listitemId
  app.update('listitems/:listitemId', listitems.update)

  // delete a listitem with listitemId
  app.delete('listitems/:listitemId', listitems.delete)
}
