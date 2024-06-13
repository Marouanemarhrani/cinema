const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cinema: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  date: { type: Date, required: true },
  seats: { type: Number, required: true },
  price: { type: Number, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;