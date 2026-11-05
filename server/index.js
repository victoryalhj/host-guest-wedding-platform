'use strict';

const express = require('express');
const app = new express();

const cors = require('cors');
const router = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Server is running')
})

app.get('/', (req, res) => {
    res.send('HostGuest Wedding server is running');
})