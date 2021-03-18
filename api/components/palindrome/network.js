'use strict'

const { Router } = require('express');

const { Controller } = require('./controller');
const { success, error } = require('../../network/response');

const controller = new Controller();
const router = Router();

// Envpoint para revertir el texto y revisar si es un palindromo
router.get('/', (req, res) => {
  const text = req.query.text;

  controller.isPalindrome({ text })
    .then((data) => {
      success({ res, data, status: 200 });
    })
    .catch((err) => {
      error({ res, err, status: 400 });
    });

});

module.exports = router;
