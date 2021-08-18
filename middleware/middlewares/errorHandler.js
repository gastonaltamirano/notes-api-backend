const { info } = require('../../modules/logger.js')

const ERROR_HANDLERS = {
  CastError: res => res.status(400).send({ error: 'malformatted id' }),

  ValidationError: (res, { message }) => res.status(400).json({ error: message }),

  JsonWebTokenError: res => res.status(401).json({ error: 'invalid token' }),

  TokenExpiredError: res => res.status(401).json({ error: 'token expired' })
};

const errorHandler = (err, req, res, next) => {
  console.log('llegue errorhandler')
  info(`Error name: ${err.name}`);
  info('-----');
  info(`Error object: ${err}`);
  info('-----');
  info(`Error message: ${err.message}`);

  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError;

  handler(res, err);

  next(err);
};

module.exports = {
  errorHandler
};