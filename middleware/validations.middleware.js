const { validationResult } = require('express-validator');

const checkErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        next();
    } else {
        res.status(400).json({
            errors: errors.array()
        })
    }

}


module.exports = {
    checkErrors
}