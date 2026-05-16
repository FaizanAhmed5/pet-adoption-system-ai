const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  type: String,
  breed: String,
  age: Number,
  gender: String,
  description: String,
  status: { type: String, default: 'available' },
  image: String
}, {timestamps:true});

module.exports = mongoose.model('Pet', petSchema);
