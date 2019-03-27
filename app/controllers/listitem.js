const Listitem = require('../models/listitem')

// Create  and save a new listitem
exports.create = (req,res) => {
  const listitem = req.body
  Listitem.create(listitem)
    .then(listitem => {
      res.json(201)
    })
    .catch(err => {
      res.json(500)
    })
}

// Retrieve and return all listitems
exports.index = (req,res) => {

}

// get a single listitem with listitemId
exports.show = (req,res) => {

}

// update a single listitem with listitemId
exports.update = (req,res) => {

}

// delete a single listeitem with listitemId
exports.delete = function (req,res) {

}
