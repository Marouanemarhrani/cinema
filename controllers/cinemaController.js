const Cinema = require('../models/cinemaModel.js');

exports.createCinema = async (req, res) => {
  try {
    const cinema = new Cinema(req.body);
    await cinema.save();
    res.status(201).send(cinema);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find();
    res.status(200).send(cinemas);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCinemaById = async (req, res) => {
  try {
    const cinema = await Cinema.findById(req.params.id);
    if (!cinema) return res.status(404).send();
    res.status(200).send(cinema);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateCinema = async (req, res) => {
  try {
    const cinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cinema) return res.status(404).send();
    res.status(200).send(cinema);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteCinema = async (req, res) => {
  try {
    const cinema = await Cinema.findByIdAndDelete(req.params.id);
    if (!cinema) return res.status(404).send();
    res.status(200).send(cinema);
  } catch (error) {
    res.status(500).send(error);
  }
};