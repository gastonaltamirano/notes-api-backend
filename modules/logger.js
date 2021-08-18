const logger = (req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.body);
  console.log('--------');
  next();
};

const info = (...params) => {
  if(process.env.NODE_ENV !== 'test') {
    console.log(...params)
  };
};

const error = (...params) => {
  if(process.env.NODE_ENV !== 'test') {
    console.error(...params)
  };
};

module.exports = {
  logger, info, error
};