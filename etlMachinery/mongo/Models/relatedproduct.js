const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relatedproduct = new Schema({
  id: {
    type: Number,
    required: true,
  },
  current_product_id: {
    type: Number,
    required: true,
    index: true
  },
  related_product_id: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('relatedproduct', relatedproduct);