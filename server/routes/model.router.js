const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// MONGODB SCHEMA AND MODEL
// const Schema = mongoose.Schema;
// const modelSchema = new Schema({
//   property: {type: String, Number, etc.}
// });
// const Model = mongoose.model('modelName', modelSchema);

// get route params with "/route/:paramName, then reference it as req.params.paramName"
router.get('/', (req, res) => {
  model.find({}) // or something like model.find({amount: {$gt: something, $lt: something}})
    .then(models => res.send(models))
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