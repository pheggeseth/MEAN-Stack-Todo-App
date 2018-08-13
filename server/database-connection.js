// MONGODB SETUP
const mongoose = require('mongoose');
const databaseName = 'AngularToDo';
const mongoURI = process.env.MONGODB_URI || `mongodb://localhost:27017/${databaseName}`; // 27017 is the PORT that Mongo is running on
mongoose.connect(mongoURI, {useNewUrlParser: true}); // {useNewUrlParser: true} <- avoids a warning in the console
mongoose.connection.on('open', () => console.log('Connected to Mongo'));
mongoose.connection.on('error', error => console.log('ERROR CONNECTING TO MONGO', error));

module.exports = mongoose;