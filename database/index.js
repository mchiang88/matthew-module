const mongoose = require('mongoose');

mongoose.connect('mongodb://13.57.2.235:27017/sdc')
  .then(() => console.log(`connected to mongoDB (sdc)`))
  .catch(err => console.error(`unable to connect to mongoDB: ${err}`))
;

const connection = mongoose.connection;

module.exports = connection;
