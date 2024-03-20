const UserRepository = require("../repository/user-repository")
const logger = require('../logger/index');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createNewUser(data) {
        try {
            let user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = UserService;