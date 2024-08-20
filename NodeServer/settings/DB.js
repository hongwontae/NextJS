const {Sequelize} = require('sequelize');

const DB_Setting = new Sequelize('nextproject', 'root', 'YourRootPassword', {
    dialect : 'mysql',
    host : 'localhost'
});


module.exports = DB_Setting;
