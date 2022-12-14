const {User} = require('../models');

const validateEmail = async (email = '') => {
    const findUser =  await User.findOne({ email })
    if( findUser ){
        return Promise.reject('E-mail already in use');
    }
}

module.exports = validateEmail