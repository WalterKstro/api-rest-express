const {Role} = require('../models');

const validateRole = async (role = '') => {
    const isRole = await Role.findOne({ role })
    if (!isRole) {
        return Promise.reject('Role invalid');
    }
}


module.exports = validateRole;