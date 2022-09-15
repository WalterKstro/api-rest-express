const userController = require('./users.controller');
const authController = require('./auth.controller');

module.exports = {
	...userController,
	...authController
}
