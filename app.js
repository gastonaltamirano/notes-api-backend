require('./mongo.js');

const express = require('express');
const app = express();
const cors = require('cors');
require('express-async-errors');

const notesRouter = require('./controllers/notes.js');
const usersRouter = require('./controllers/users.js');
const loginRouter = require('./controllers/login.js');

const {logger, error} = require('./modules/logger.js');
const { errorHandler, unknownEndpoint } = require('./middleware/middleaware.js');

app.use(cors());
app.use(express.static('build'));

app.use(express.json());
app.use(logger);

app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

if(process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing.js');
  app.use('./api/testing', testingRouter);
}

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;