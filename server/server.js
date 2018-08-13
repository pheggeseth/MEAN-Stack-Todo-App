const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

// Configure body-parser for Angular and jQuery
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // This line is required for Angular

// MONGODB SETUP
const mongoose = require('mongoose');
const databaseName = 'AngularToDo';
const mongoURI = process.env.MONGODB_URI || `mongodb://localhost:27017/${databaseName}`; // 27017 is the PORT that Mongo is running on
mongoose.connect(mongoURI, {useNewUrlParser: true}); // {useNewUrlParser: true} <- avoids a warning in the console
mongoose.connection.on('open', () => console.log('Connected to Mongo'));
mongoose.connection.on('error', error => console.log('ERROR CONNECTING TO MONGO', error));

// import routes from router
const todosRouter = require('./routes/todos.router.js');
// use routes in router given a base route
app.use('/todos', todosRouter);

// Static files
app.use(express.static('server/public'));

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});