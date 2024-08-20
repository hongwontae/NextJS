const Event = require('../models/EventModel');

exports.allEvent = async (req, res, next)=>{
    const eventItems = await Event.findAll();

    return res.json(eventItems);
}