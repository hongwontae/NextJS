const express = require('express');
const bodyParser = require('body-parser');

const DB = require('../settings/DB');
const EventModel = require('../models/EventModel');

const EventRouter = require('../router/EventRouter');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type",
      "Authorization"
    );
    next();
  });

app.use('/event', EventRouter);
  
app.use('/ar', (req, res, next)=>{
    console.log('Hello-App router')
    return res.json({data : 'Hello-world'})
})


DB.sync().then(()=>{
    console.log('Connect Success');
}).then(()=>{
    app.listen(8080, ()=>{
        console.log('App Connection Success!');
    })
})


