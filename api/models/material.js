const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantityLeft: {
    type: Number,
    required: true,
    min: 0
  },
  cost: {
    type: Number 
  },
  isRecycled: {
    type: Boolean
  },
  description: {
    type: String
  }
});

const Material = mongoose.model('Material', MaterialSchema);

module.exports = Material;