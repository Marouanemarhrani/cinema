const Reservation = require('../models/reservationModel.js');

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('user cinema movie');
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate('user cinema movie');
    if (!reservation) return res.status(404).send();
    res.status(200).send(reservation);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!reservation) return res.status(404).send();
    res.status(200).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) return res.status(404).send();
    res.status(200).send(reservation);
  } catch (error) {
    res.status(500).send(error);
  }
};