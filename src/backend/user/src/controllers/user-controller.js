const logger = require("../logger");
const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
    console.log(req.body);
    try {
        const response = userService.createNewUser({
            username: req.body.username,
            password: req.body.password,
            mobile: req.body.mobile
        })
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        logger.error(error)
        return res.status(500).json({
            success: false,
            message: 'Unable to create the user, somthing went wrong in controller layer',
            data: {},
            err: {}
        });
    }
}



module.exports = {
    create
}