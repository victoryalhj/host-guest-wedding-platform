'use strict';

const Rsvp = require('../models/Rsvp');

async function postRsvp (req, res) {
  const {title, attendance, guestCount, allergy} = req.body;
  if (!title || attendance === undefined || !guestCount ) {
    return res.status(400).json({message: 'Missing required parameters'})
  }
  try {
    const createdRsvp = await Rsvp.create(req.body);
    res.status(201);
    res.json(createdRsvp);
  } catch (error) {
    res.status(500);
    res.json({message: 'Server error'})
  }
}

module.exports = postRsvp;