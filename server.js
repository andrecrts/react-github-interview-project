const express = require('express');

const app = express();

const open = require('open');

app.use('/dist', express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening ${port} ... `);
  open(`http://localhost:${port}/`);
});
