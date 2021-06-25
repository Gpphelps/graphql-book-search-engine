const mongoose = require('mongoose');
// Allows the .env file to manage the MONGODB_URI variable
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
