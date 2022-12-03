module.exports = (app) => {
  const todos = require('../controllers/todo');

  // retrieve all todos
  app.get('/todos', todos.index);

  // get a single todo  with id
  app.get('/todos/:id', todos.show);

  // create a new todo
  app.post('/todos', todos.create);

  // update a todo with id
  app.patch('/todos/:id', todos.update);

  // delete a todo with id
  app.delete('/todos/:id', todos.destroy);
};
