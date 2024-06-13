const Event = require('../models/eventModel.js');

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('cinema movie');
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('cinema movie');
    if (!event) return res.status(404).send();
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) return res.status(404).send();
    res.status(200).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).send();
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};