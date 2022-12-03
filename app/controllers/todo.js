const Todo = require('../models/todo');

// Retrieve and return all todo
const index = (req, res, next) => {
  Todo.find()
    .then((todo) => {
      res.json(todo);
    })
    .catch(next);
};

// get a single Todo
const show = (req, res, next) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: 'Todo not found with id ' + req.params.id,
        });
      }
      // res.send(todo)
      res.json(todo);
    })
    .catch(next);
};

// Create  and save a new todo
const create = (req, res) => {
  const todo = Object.assign(req.body, {
    completed: false,
  });
  Todo.create(todo)
    .then((todo) => {
      res.status(201);
      res.json(todo);
    })
    .catch((err) => {
      // res.status(500)
      res.status(500).send({
        message: err.message || 'Error on creating an todo',
      });
    });
};

// update a single todo
const update = (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((todo) => {
      res.send(todo);
    })
    .catch(next);
};

// delete a single todo
const destroy = (req, res, next) => {
  Todo.findByIdAndRemove(req.params.id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).send({
          message: `Todo with id ${req.params.id} not found`,
        });
      }
      res.send({ message: 'Todo delete successfully' });
    })
    .catch(next);
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
