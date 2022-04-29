const { RuleTester } = require('eslint');
const express = require('express');

const router = express.Router();
const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

router.post('/negate', (req, res) => {
  res.status(200);
  res.send({ result: negate(req.body.value) });
});

router.post('/truthiness', (req, res) => {
  res.status(200);
  res.send({ result: truthiness(req.body.value) });
});

router.get('/is-odd/:number', (req, res) => {
  const num = Number.parseInt(req.params.number, 10);

  if (Number.isNaN(num)) {
    res.status(400);
    res.send({ error: 'Parameter must be a number.' });
  }
  res.status(200);
  res.send({ result: isOdd(num) });
});

router.get('/:string/starts-with/:character', (req, res) => {
  const str = req.params.string;
  const char = req.params.character;

  if (char.length > 1) {
    res.status(400);
    res.send({ error: 'Parameter "character" must be a single character.' });
  }

  res.status(200);
  res.send({ result: startsWith(char, str) });
});

module.exports = router;
