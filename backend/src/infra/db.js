const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('compet', 'root', 'compet', {
  host: 'localhost',
  port: 3307,
  dialect: 'mysql'
});

module.exports = sequelize;