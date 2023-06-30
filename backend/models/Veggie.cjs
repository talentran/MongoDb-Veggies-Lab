const mongoose = require('mongoose');

const VeggieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  origin: {
    type: String,
  }
});

module.exports = mongoose.model('Veggie', VeggieSchema);
