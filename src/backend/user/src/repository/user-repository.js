const { User } = require("../models/index");
const logger = require('../logger/index');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            logger.error('Something went wrong at repository layer while creating user');
            throw error;
        }
    }

    async destroy(id) {

    }

    async getById(id) {

    }

    async getByMail(email) {

    }

    async getByMobileNumber(contact) {

    }

    async update() {

    }
}

module.exports = UserRepository;