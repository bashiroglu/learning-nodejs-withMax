const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mynewpassword', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
