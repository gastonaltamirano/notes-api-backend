const mongoose = require('mongoose');
const { MONGODB_URI } = require('./modules/config.js')
const { info, error } = require('./modules/logger.js')

const url = MONGODB_URI;

info('connecting to', url);

//connection to mongo

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => {
    info('database connected');
  })
  .catch(err => {
    error(err);
  });

process.on('uncaughtException', err => {
  error(err);
  mongoose.disconnect();
});