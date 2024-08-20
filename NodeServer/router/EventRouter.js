const express = require('express');
const EventController = require('../controller/EventController');

const router = express.Router();

router.get('/allEvent', EventController.allEvent);

module.exports = router;

