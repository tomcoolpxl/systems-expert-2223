'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Kubernetes @ PXL - version 2.0');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);