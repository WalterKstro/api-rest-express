require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateJwt = ( uid ) => {
	return new Promise((resolve,reject)=> {
		jwt.sign(uid, process.env.SECRETORPRIVATEKEY,(error,token)=> {
			error ? reject({error}) : resolve({token})
		})
	})
}


module.exports = generateJwt