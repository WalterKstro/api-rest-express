const validateEmail = require('./validate.email');
const existMongoId = require('./validate.mongo.id');
const validateRole = require('./validate.role');

module.exports = {
	validateEmail,
	existMongoId,
	validateRole
}