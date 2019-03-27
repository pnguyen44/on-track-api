const mongoose = require('mongoose')

const listitemSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  completed: Boolean,
  {
    timestamps: true
  }
})

const Listitem = mongoose.model('Listitem, listitemSchema')

module.exports = Listitem
