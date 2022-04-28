const express = require('express');

const router = express.Router();

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

router.get('/hello/:string', (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
});

router.get('/upper/:string', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
});

router.get('/lower/:string', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
});

router.get('/first-characters/:string', (req, res) => {
  res.status(200);
  if (req.query.length) {
    res.send({ result: firstCharacters(req.params.string, req.query.length) });
  }
  res.send({ result: firstCharacter(req.params.string) });
});

module.exports = router;
