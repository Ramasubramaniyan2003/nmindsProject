const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);