'use strict';

const Rsvp = require('../models/Rsvp');

async function getRsvp (req, res) {
  try {
    const rsvp = await Rsvp.find();
    res.status(200).json(rsvp);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
}

async function postRsvp (req, res) {
  const {name, attendance, guestCount, allergy} = req.body;
  if (!name || attendance === undefined || guestCount === '' ) {
    return res.status(400).json({message: 'Missing required parameters'})
  }
  try {
    const createdRsvp = await Rsvp.create(req.body);
    res.status(201).json(createdRsvp);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
}

module.exports = { postRsvp, getRsvp };