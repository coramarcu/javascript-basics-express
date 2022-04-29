const express = require('express');

const app = express();

const strings = require('./routes/strings');
const numbers = require('./routes/numbers');
const booleans = require('./routes/booleans');

app.use(express.json());
app.use('/strings', strings);
app.use('/numbers', numbers);
app.use('/booleans', booleans);

module.exports = app;
