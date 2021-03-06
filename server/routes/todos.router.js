const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MONGODB SCHEMA AND MODEL
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  text: {type: String},
  category: {type: String},
  completed: {type: Boolean}
});
const Todo = mongoose.model('Todo', todoSchema);

const consoleLogs = true;

// ROUTES
router.get('/', (req, res) => {
  if(consoleLogs) console.log('/todos GET');
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(error => res.sendStatus(500));
});

router.post('/', (req, res) => {
  if(consoleLogs) console.log('/todos POST:', req.body);
  const newTodo = new Todo(req.body);
  newTodo.save()
   //.then(() => res.sendStatus(201))
   .then(response => res.send(newTodo)) // sending newTodo back so it can be pushed into todos controller array
   .catch(error => res.sendStatus(500));
});

router.put('/complete/:id', (req, res) => {
  if(consoleLogs) console.log('/todos/complete PUT:', req.params.id);
  Todo.findOne({_id: req.params.id})
    .then(foundTodo => {
      foundTodo.completed = !foundTodo.completed;
      foundTodo.save()
        //.then(response => res.sendStatus(201))
        .then(response => res.send(foundTodo))
        .catch(error => res.sendStatus(500));
    }).catch(error => res.sendStatus(500));
});

router.delete('/delete/:id', (req, res) => {
  if(consoleLogs) console.log('/todos/delete DELETE:', req.params.id);
  Todo.findByIdAndRemove(req.params.id)
   .then(response => res.sendStatus(201))
   .catch(() => res.sendStatus(500));
});

module.exports = router;