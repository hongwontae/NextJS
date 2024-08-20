const {DataTypes} = require('sequelize');


const DB = require('../settings/DB');

const Events = DB.define('events', {
    id : {
        type : DataTypes.STRING,
        allowNull : false,
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    descriptions : {
        type : DataTypes.STRING,
        allowNull : false
    },
    location : {
        type : DataTypes.STRING,
        allowNull : false
    },
    date : {
        type : DataTypes.STRING,
        allowNull : false
    },
    image : {
        type : DataTypes.STRING,
        allowNull : false
    },
    isFeatured : {
        type : DataTypes.BOOLEAN,
        allowNull : false
    }
})

module.exports = Events;