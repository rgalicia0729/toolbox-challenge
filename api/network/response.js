'use strict'

// Response si todo sale bien
const success = ({ res, data, status }) => {
  res.status(status).json(data);
};

// Response si hay algun error
const error = ({ res, err, status }) => {
  console.error('[Error]:', err);
  const message = err || 'Server error';

  if (!status) {
    status = err.statusCode || 500;
  }

  res.status(status).json({
    error: message
  });
}

module.exports = {
  success,
  error
}
