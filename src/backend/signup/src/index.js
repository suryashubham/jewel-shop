const express = require('express');

const logger = require('./logger/index');

const app = express();

const { PORT } = require('./config/serverConfig')

const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        logger.info('This is an informational message');
        logger.warn('This is a warning message');
        logger.error('This is an error message');
    });
};

prepareAndStartServer();