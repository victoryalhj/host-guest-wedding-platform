'use strict';

const mongoose = require('../models/db');

const rsvpSchema = new mongoose.Schema({
  title: String,
  attendance: Boolean,
  guestCount: Number,
  allergy: String
}, {
  timestamps: true
});

const Rsvp = mongoose.model('Rsvp', rsvpSchema);

module.exports = Rsvp;