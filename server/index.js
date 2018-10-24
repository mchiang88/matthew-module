const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/shoedidas', routes);

const port = 1337;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
})