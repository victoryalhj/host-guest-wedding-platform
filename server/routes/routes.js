'use strict';

const router = require('express').Router();
const postRsvp = require('../controllers/rsvp.controller');
const postGuestbook = require('../controllers/guestbook.controller');

router.post('/rsvp', postRsvp);
router.post('/guestbook', postGuestbook);

module.exports = router;