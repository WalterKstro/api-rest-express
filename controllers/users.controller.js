const { request, response } = require('express');

const callbackGet = (req = request, res = response) => {
    res.json({
        msg: 'GET with the router'
    })
}
const callbackPut = (req = request, res = response) => {
    res.json({
        msg: 'PUT with the router'
    })
}
const callbackPost = (req = request, res = response) => {
    res.json({
        msg: 'POST with the router'
    })
}
const callbackDelete = (req = request, res = response) => {
    res.json({
        msg: 'DELETE with the router'
    })
}

module.exports = {
    callbackGet,
    callbackDelete,
    callbackPost,
    callbackPut
}