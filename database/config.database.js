const mongoose = require('mongoose');
require('dotenv').config();

const connection = () => {
    try {
        mongoose.connect(process.env.MONGO_STRING_CONNECT);
        console.log('Conected to database')
    } catch (error) {
        throw new Error("Connection to database failed")
    }
}

module.exports = {
    connection
}