const {Router} = require('express')
const { check } = require('express-validator');
const authentication = new Router();
const { callbackAuthPost } = require('../controllers/auth.controller');
const { checkErrors } = require('../middleware/validations.middleware');

authentication.post('/',[
		check('email',"Email is required or isn't valid").isEmail().not().isEmpty(),
		check('password','Password is required').not().isEmpty(),
		checkErrors
	],
	callbackAuthPost)

module.exports = authentication