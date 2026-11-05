'use strict';

const Guestbook = require('../models/Guestbook');

async function postGuestbook (req, res) {
  const {title, message} = req.body;
  if (!title || !message) {
    return res.status(400).json({message: 'Missing required parameters'});
  }
  try {
    const created = await Guestbook.create(req.body);
    res.status(201);
    res.json(created);
  } catch (error) {
    res.status(500);
    res.json({message: 'Server error'})
  }
} 

module.exports = postGuestbook;