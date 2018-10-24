const Sequelize = require('sequelize');
const connection = new Sequelize('RR', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

connection
  .authenticate()
  .then(() => {
    console.log('MySQL connection has been established successfully');
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err);
  })

module.exports = connection;