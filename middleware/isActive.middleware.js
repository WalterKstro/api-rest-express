const User = require('../models/user.model');

const isActiveUsername = async ( req, res ,next) => {
	const {email} = req.body
	try {
		const {state} =  await User.findOne({ email })
		if( state ) {
			next();
		}else {
			throw new Error('Account disabled')
		}
		
	} catch(e) {
		res.status(404).json({
			status: e.message
		})
	}
}


module.exports = isActiveUsername;

