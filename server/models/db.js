'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hostguest?directConnection=true')
  .then(() => console.log('mongodb connected'))
  .catch((error) => console.log('mongodb connection error', error.message));

  module.exports = mongoose;