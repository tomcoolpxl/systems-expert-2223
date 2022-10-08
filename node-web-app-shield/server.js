'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Kubernetes @ PXL - SHIELD');
});
app.get('/shield', (req, res) => {
  res.send('Kubernetes @ PXL - SHIELD');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);