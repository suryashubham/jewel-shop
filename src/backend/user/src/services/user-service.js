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
            logger.error("something went wrong at service layer while creating user");
            throw error;
        }
    }
}


module.exports = UserService;