const { request, response } = require('express');
const User = require('../../models/user.model');

const remove = async (req = request, res = response) => {
    const { id } = req.params;
    
    const updated = await User.findOneAndUpdate({_id:id},{state:false},{returnDocument:'after' })
    res.json({
        user: updated
    })
}


module.exports = remove;