const get = require('./users/get');
const put = require('./users/put');
const post = require('./users/post');
const remove = require('./users/delete');

const callbackGet = get
const callbackPut = put
const callbackPost = post
const callbackDelete = remove

module.exports = {
    callbackGet,
    callbackDelete,
    callbackPost,
    callbackPut
}