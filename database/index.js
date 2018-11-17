const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      handleDisconnects: true
    }
  });

connection
  .authenticate()
  .then(() => {
    console.log('Postgres now connected');
  })
  .catch((err) => {
    console.error('Unable to connect to database: ', err);
  });

module.exports = connection;
