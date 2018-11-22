const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/sdc')
  .then(() => console.log(`connected to mongoDB (sdc)`))
  .catch(err => console.error(`unable to connect to mongoDB: ${err}`))
;

const connection = mongoose.connection;

module.exports = connection;
