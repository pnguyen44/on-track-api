const Item = require('../models/item')

// Retrieve and return all item
const index = (req,res,next) => {
  Item.find()
    .then(item => {
      res.json(item)
    })
    .catch(next)
}

// get a single Item
const show = (req,res,next) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: 'Item not found with id ' + req.params.id
        })
      }
      // res.send(Item)
      res.json(item)
    })
    .catch(next)
}

// Create  and save a new Item
const create = (req,res) => {
  const item = Object.assign(req.body, {
    completed: false
  })
  Item.create(item)
    .then((item) => {
      res.status(201)
      res.json(item)
    })
    .catch(err => {
      // res.status(500)
      res.status(500).send({
        message: err.message || "Error on creating an item"
      });
    })
}

// update a single Item
const update = (req,res,next) => {
  Item.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(item => {
      res.send(item)
    })
    .catch(next)
}

// delete a single Item
const destroy = (req,res,next) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(404).send({
          message: `Item with id ${req.params.id} not found`
        })
      }
      res.send({message: 'Item delete successfully'})
    })
    .catch(next)
}


module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
