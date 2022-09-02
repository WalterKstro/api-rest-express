const User = require("../../models/user.model")

const get = async (req = request, res = response) => {
    const { limit = 5, from = 0 } = req.query
    const filter = { state: true }
    const [list, total] = await Promise.all([User.find(filter).limit(limit).skip(from), User.countDocuments(filter)])

    res.json({
        total,
        users: list
    })
}

module.exports = get;