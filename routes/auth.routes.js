const {Router} = require('express')
const { check } = require('express-validator');
const authentication = new Router();

const { callbackAuthPost } = require('../controllers');
const { isActiveUsername,checkErrors } = require('../middleware');

authentication.post('/',[
		isActiveUsername,
		check('email',"Email is required or isn't valid").isEmail().not().isEmpty(),
		check('password','Password is required').not().isEmpty(),
		checkErrors
	],
	callbackAuthPost
)

module.exports = authentication