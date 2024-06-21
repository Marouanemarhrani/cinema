const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  genre: [String], // e.g., ['Action', 'Comedy']
  releaseDate: { type: Date, required: true },
  rating: { type: String, required: true },
  cover : {type: String, required: true}
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;