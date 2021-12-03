const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feature = new Schema({
  id: {
    type: Number,
    required: true,
  },
  productId: {
    type: Number,
    required: true,
    index: true
  },
  feature: {
    type: String,
    required: true
  },
  value: {
    type: String
  }
})

module.exports = mongoose.model('feature', feature);