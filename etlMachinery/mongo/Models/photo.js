const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photo = new Schema({
  id: {
    type: Number,
    required: true,
  },
  styleId: {
    type: Number,
    required: true,
    index: true
  },
  url: {
    type: String,
    required: true,
  },
  thumbnail_url: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('photo', photo);