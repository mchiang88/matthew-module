const app = require('./app');

const port = 1337;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
