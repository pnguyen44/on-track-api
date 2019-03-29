module.exports = app => {
  const items = require('../controllers/item')

  // retrieve all items
  app.get('/items', items.index)

  // get a single item  with id
  app.get('/items/:id', items.show)

  // create a new item
  app.post('/items', items.create)

  // update a item with id
  app.put('/items/:id', items.update)

  // delete a item with id
  app.delete('/items/:id', items.destroy)
}
