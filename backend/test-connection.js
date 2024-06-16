const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://aarnavsingh836:Cucumber1729@rr.oldse8x.mongodb.net/user?retryWrites=true&w=majority&appName=rr';

mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas', err));
