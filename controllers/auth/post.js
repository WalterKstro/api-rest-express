const { request, response } = require('express');
const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const generateJwt = require('../../utils/generateJwt');

const post = async (req = request, resp = response) => {
    const {email, password} = req.body
    
    try {

        const findUserByEmail =  await User.findOne({ email })
        if( !findUserByEmail) throw new Error("User y/o password invalid");

        const {state} = findUserByEmail;
        if( !state ) throw new Error("User isn't availability");

        const matchPassword = bcrypt.compareSync(password, findUserByEmail.password);
        if( !matchPassword ) throw new Error("User y/o password invalid");

        const token = await generateJwt(findUserByEmail.id)

        resp.json(token)

    } catch(e) {
        resp.status(400).json({
            status: e.message
        })
    }
}

module.exports = post