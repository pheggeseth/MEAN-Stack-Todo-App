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
  const newTodo = new Todo(req.body);
  newTodo.save()
   .then(() => res.sendStatus(201))
   .catch(error => res.sendStatus(500));
});

router.put('/complete/:id', (req, res) => {
  console.log('/todos/complete PUT received:', req.params.id);
  Todo.findOne({_id: req.params.id})
    .then(foundTodo => {
      foundTodo.completed = true;
      foundTodo.save()
        .then(response => res.sendStatus(201))
        .catch(error => res.sendStatus(500));
    }).catch(error => res.sendStatus(500));
});

router.delete('/:id', (req, res) => {
  // Model.findByIdAndRemove(req.params.id)
  //  .then(response => res.sendStatus(201))
  //  .catch(() => res.sendStatus(500));
});

module.exports = router;