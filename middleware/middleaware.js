const {errorHandler} = require('./middlewares/errorHandler.js');

const unknownEndpoint = require('./middlewares/unknownEndpoint.js');

module.exports = {
  errorHandler,
  unknownEndpoint
}