const { createLogger, transports } = require('winston');
const { PRODUCTION } = require('../config/serverConfig');

const winston = require('winston');
const { format } = require('date-fns');

const isProduction = PRODUCTION === '1' || PRODUCTION === 'true';

const logMessageFormat = winston.format.printf(({ level, timestamp, message }) => {
    const currentDate = format(timestamp, 'yyyy-MM-dd');
    return `${ currentDate } - ${ level.toUpperCase() }: ${ message }: ${ timestamp }`;
});

const logger = createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), logMessageFormat),
    transports: [
        // If not in production, log to the console
        !isProduction && new transports.Console({ format: winston.format.simple() }),

        // If in production, log to files
        isProduction && new transports.File({ filename: 'error.log', level: 'error' }),
        isProduction && new transports.File({ filename: 'combined.log' })
    ].filter(Boolean)
});

module.exports = logger;