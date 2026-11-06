'use strict';

const router = require('express').Router();
const {getRsvp, postRsvp} = require('../controllers/rsvp.controller');
const {getGuestbook,postGuestbook} = require('../controllers/guestbook.controller');


router.get('/rsvp', getRsvp)
router.get('/guestbook', getGuestbook)

router.post('/rsvp', postRsvp);
router.post('/guestbook', postGuestbook);

module.exports = router;