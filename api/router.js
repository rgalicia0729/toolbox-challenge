'use trict'

const palindrome = require('./components/palindrome/network');

const router = (app) => {
  app.use('/iecho', palindrome);
}

module.exports = {
  router
}
