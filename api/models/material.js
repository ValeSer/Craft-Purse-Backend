const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
  name: {
    type: String
  },
  quantityLeft: {
    type: Number
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