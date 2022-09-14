require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require("../models/user.model");

const isAuthenticationByToken = ( req, res ,next) => {
	const hasToken = req.get('x-token')

	try {
		if( !hasToken ) throw new Error('Unauthorized');
		jwt.verify( hasToken, process.env.SECRET_OR_PRIVATEKEY, async (error, uid) => {
			if( error ) throw new Error(error.message);
			const userAuthenticated = await User.findById( uid ).exec();
			req.userAuthenticated = userAuthenticated;
			next()
		})
	} catch(error) {
		res.status(401).json({
			status: error.message
		})
	}

}

module.exports = isAuthenticationByToken;