const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
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

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;