const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sku = new Schema({
  id: {
    type: Number,
    required: true,
  },
  styleId: {
    type: Number,
    required: true,
    index: true
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('sku', sku);