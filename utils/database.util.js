const {Sequelize, DataTypes} = require('sequelize');

// Establish data base connection
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Future3ThreeJS',
    port: 5432,
    database: 'blogs',
    logging: false
});

module.exports = { db, DataTypes };