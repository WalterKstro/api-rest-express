const bcrypt = require('bcryptjs');

const encript = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}


module.exports = encript