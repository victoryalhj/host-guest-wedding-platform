'use strict';

const mongoose = require('../models/db');

const guestbookSchema = new mongoose.Schema({
  title: String,
  message: String
}, {
  timestamps: true
});

const Guestbook = mongoose.model('Guestbook', guestbookSchema);

module.exports = Guestbook;


