const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract } = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200);
  if (req.query.length) {
    res.send({ result: firstCharacters(req.params.string, req.query.length) });
  }
  res.send({ result: firstCharacter(req.params.string) });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const number1 = parseInt(num1, 10);
  const number2 = parseInt(num2, 10);
  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200);
  res.send({ result: add(number1, number2) });
});

app.get('/numbers/subtract/:number1/from/:number2', (req, res) => {
  const { number1, number2 } = req.params;
  const num1 = parseInt(number1, 10);
  const num2 = parseInt(number2, 10);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }

  res.status(200);
  res.send({ result: subtract(num2, num1) });
});

module.exports = app;
