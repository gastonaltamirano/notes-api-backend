const app = require('./app');
const http = require('http')
const config = require('./modules/config.js');
const logger = require('./modules/logger.js');

const { PORT } = config;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});