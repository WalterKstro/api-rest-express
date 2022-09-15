const { User } = require("../../models");
const encript = require("../../utils/bcrypt");

const post = async (req = request, res = response) => {
    const { firstName, lastName, password, email, photo, role } = req.body;
    const user = new User({ firstName, lastName, password: encript(password), email, photo, role })

    user.save((error, data) => {
        if (error) {
            res.status(500).json({
                status: 'Error in create new register'
            })
        } else {
            res.json({
                id: data.id
            })
        }
    })
}

module.exports = post