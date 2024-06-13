const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  amenities: [String], // e.g., ['Dolby', '3D', 'Recliner seats']
  coordinates: {
    lat: Number,
    lng: Number
  }
});

const Cinema = mongoose.model('Cinema', cinemaSchema);

module.exports = Cinema;