const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    PRODUCTION: process.env.PRODUCTION,
    DEVELOPMENT: process.env.DEVELOPMENT
}