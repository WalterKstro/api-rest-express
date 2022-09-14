const { request, response } = require('express');
const User = require('../../models/user.model');

const remove = async (req = request, res = response) => {
    const { id } = req.params;
    const { role,...rest } = req.userAuthenticated
    if( role == 'ROOT' ){
        const updated = await User.findOneAndUpdate({_id:id},{state:false},{returnDocument:'after' })
        res.json({
            user: updated
        })
    }else {
        res.status(401).json({
            user: 'Role Unauthorized'
        })
    }
}


module.exports = remove;