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
      // res.status(500).send({
      //   message: err.message || "Error on creating a listitem"
      // });
    })
}

// Retrieve and return all listitems
exports.index = (req,res) => {
  Listitem.find()
    .then(listitems => {
      res.json(listitems)
    })
    .catch(err => {
      res.json(500)
    })
}

// get a single listitem with listitemId
exports.show = (req,res,next) => {
  Listitem.findById(req.params.id)
    .then(listitem => {
      if (!listitem) {
        return res.status(404).send({
          message: 'listitem note found with id ' + req.params.id
        })
      }
      // res.send(listitem)
      res.json(listitem)
    })
    .catch(next)
}

// update a single listitem with listitemId
exports.update = (req,res) => {

}

// delete a single listeitem with listitemId
exports.delete = function (req,res) {

}
