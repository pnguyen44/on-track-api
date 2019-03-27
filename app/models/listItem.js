const mongoose = require('mongoose')

const listitemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  completed: Boolean}, {
    timestamps: true
  })

  const Listitem = mongoose.model('Listitem', listitemSchema)

module.exports = Listitem
