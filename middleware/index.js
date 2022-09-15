const checkErrors = require('./validations.middleware');
const isAuthenticationByToken = require('./authentication.middleware');
const hasPermission = require('./hasPermission.middleware');
const isActiveUsername = require('./isActive.middleware');

module.exports = {
	checkErrors,
	isAuthenticationByToken,
	hasPermission,
	isActiveUsername
}