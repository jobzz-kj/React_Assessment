const Sequelize = require('sequelize');
const db = require('../config/database');

//creating a table named EMPLOYEEREGISTRATION
const Gig = db.define('EMPLOYEEREGISTRATION',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    age:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    gender:{
        type: Sequelize.STRING,
        allowNull:false
    },
    address:{
        type: Sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Gig;