const { Logger, log } = require("winston");
const logger = require("../logger");
const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.createNewUser({
            username: req.body.username,
            mobile: req.body.mobile,
            password: req.body.password
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.explanations,
        });
    }
}



module.exports = {
    create
}