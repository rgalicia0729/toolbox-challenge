'use strict'

const express = require('express');
const cors = require('cors');

const { env } = require('./config');
const { router } = require('./router');

const app = express();
app.use(express.json());
app.use(cors());

// Agregando las rutas
router(app);

app.listen(env.PORT, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(`API listening on: ${env.PORT}`);
  }
});

module.exports = app;
