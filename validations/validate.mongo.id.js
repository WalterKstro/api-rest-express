const User = require("../models/user.model");

const existMongoId = async (id) => {
    const user = await User.findById(id).exec();
    if( !user ){
        return Promise.reject("Mongo's id not exist");
    }
}

module.exports = existMongoId