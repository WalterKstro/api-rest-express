const { User } = require('../../models');

const remove = async ( req,res ) => {
    const { id } = req.params;

    try {
        const updated = await User.findOneAndUpdate({_id:id},{state:false},{returnDocument:'after' })
        res.json({
            user: updated
        })
    } catch(e) {
        res.status(401).json({
            status: e.message 
        })
    }
}


module.exports = remove;