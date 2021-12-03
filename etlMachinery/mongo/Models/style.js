const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const style = new Schema({
  id: {
    type: Number,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
  },
  sale_price: {
    type: Number,
  },
  original_price: {
    type: Number,
    required: true,
  },
  default_style: {//1 or 0: true or false
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('style', style);