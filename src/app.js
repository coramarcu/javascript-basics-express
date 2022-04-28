const express = require('express');

const app = express();

const strings = require('./routes/strings');
const numbers = require('./routes/numbers');

app.use(express.json());
app.use('/strings', strings);
app.use('/numbers', numbers);

module.exports = app;
