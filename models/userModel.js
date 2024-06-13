const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  activity: { type: String, enum: ['student', 'employed', 'retired'], required: true },
  phoneNumber: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;