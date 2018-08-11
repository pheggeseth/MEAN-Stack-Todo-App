const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MONGODB SCHEMA AND MODEL
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  text: {type: String},
  completed: {type: Boolean}
});
const Todo = mongoose.model('Todo', todoSchema);

// ROUTES
router.get('/', (req, res) => {
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(error => res.sendStatus(500));
});

router.post('/', (req, res) => {
  // get data with req.body
  // for posting to MongoDB, use something like...
  // const modelToAdd = new Model(req.body);
  // modelToAdd.save()
  //  .then(() => res.sendStatus(201))
  //  .catch(error => res.sendStatus(500));
});

router.put('/:id', (req, res) => {
  /* 
  Model.findOne({_id: req.params.id})
    .then(foundModel => {
      //alter model then save in database
    }).catch(error => res.sendStatus(500));
  */
});

router.delete('/:id', (req, res) => {
  // Model.findByIdAndRemove(req.params.id)
  //  .then(response => res.sendStatus(201))
  //  .catch(() => res.sendStatus(500));
});

module.exports = router;