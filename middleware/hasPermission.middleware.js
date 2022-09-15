const hasPermission = (roles) => (req,res,next) => {
	const {role} = req.userAuthenticated
	if( roles.includes(role) ){
		next()
	}else {
		res.status(401).json({
			status: 'Unauthorized: is not role ROOT or ADMIN'
		})
	}
}

module.exports = hasPermission;