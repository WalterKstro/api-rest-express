require('dotenv').config();

const isRoot = (req,res,next) => {
	const {role} = req.userAuthenticated

	if( role === process.env.ROLE_ROOT ){
		next()
	}else {
		res.status(401).json({
			status: 'Unauthorized: is not role ROOT'
		})
	}
}

module.exports = isRoot;