const dotenv = require("dotenv");
const bcrypt = require('bcrypt');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    PRODUCTION: process.env.PRODUCTION,
    DEVELOPMENT: process.env.DEVELOPMENT,
    JWT_KEY: process.env.JWT_KEY,
    SALT: bcrypt.genSaltSync(9)
};