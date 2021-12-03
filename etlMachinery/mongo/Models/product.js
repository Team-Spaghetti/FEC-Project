const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
  id: {
    type: Number,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  default_price: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('product', product);