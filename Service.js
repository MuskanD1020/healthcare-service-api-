const mongoose = require('mongoose');

// Define schema for services
const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

// Create the Service model
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
