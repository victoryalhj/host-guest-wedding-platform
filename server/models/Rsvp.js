'use strict';

const mongoose = require('../models/db');

const rsvpSchema = new mongoose.Schema({
  name: String,
  attendance: String,
  guestCount: Number,
  allergy: [String],
  option: String
}, {
  timestamps: true
});

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

module.exports = Rsvp;