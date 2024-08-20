const express = require('express');
const bodyParser = require('body-parser');

const DB = require('../settings/DB');
const EventModel = require('../models/EventModel');

const EventRouter = require('../router/EventRouter');

const app = express();

app.use(bodyParser.json());

app.use('/event', EventRouter);


DB.sync().then(()=>{
    console.log('Connect Success');
}).then(()=>{
    app.listen(8080, ()=>{
        console.log('App Connection Success!');
    })
})


