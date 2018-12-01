const app = require('./app');

const port = 80;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
