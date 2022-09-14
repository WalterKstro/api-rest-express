const { Schema, model } = require('mongoose');

const schemaUser = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: {
        type: String,
        unique: true
    },
    photo: String,
    role: String,
    state: {
        type: Boolean,
        default: true
    },
    authGoogle: {
        type: Boolean,
        default: false
    }
})

schemaUser.methods.toJSON = function() {
    const { __v, _id, ...rest } = this.toObject();
    return {...rest, uid:_id};
}
const User = model('User', schemaUser)

module.exports = User;