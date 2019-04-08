const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  completed: Boolean}, {
    timestamps: true
  })

  const Todo = mongoose.model('Todo', itemSchema)

module.exports = Todo
