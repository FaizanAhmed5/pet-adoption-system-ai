const mongoose = require('mongoose');

const adoptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
  pet: { type: mongoose.Schema.Types.ObjectId, ref:'Pet' },
  message: String,
  status: { type: String, default:'pending' }
}, {timestamps:true});

module.exports = mongoose.model('Adoption', adoptionSchema);
