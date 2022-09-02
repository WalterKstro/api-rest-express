const { Schema, model } = require('mongoose');

const schemaRole = new Schema({
    role: {
        type:String,
        required:true
    }
})


const Role = model('Role', schemaRole)

module.exports = Role;