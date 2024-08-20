const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known')));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/shareFile', (req, res) => {
  // Handle the deep link here
  res.send('Deep link handled!');
});