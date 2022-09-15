const { User } = require("../../models");
const encript = require("../../utils/bcrypt");

const put = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, password, email, ...rest } = req.body;
    if (password) {
        rest.password = encript(password)
    }
    const userUpdated = await User.findByIdAndUpdate(id, rest, { returnDocument: 'after' })
    res.json({
        user: userUpdated
    })
}

module.exports = put;