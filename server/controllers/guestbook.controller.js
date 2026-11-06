'use strict';

const Guestbook = require('../models/Guestbook');

async function getGuestbook (req, res) {
  try {
    const guestbook = await Guestbook.find();
    res.status(200).json(guestbook);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
}

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
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
}

module.exports = {getGuestbook, postGuestbook};