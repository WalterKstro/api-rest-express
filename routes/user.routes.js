const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();

const { callbackGet, callbackDelete, callbackPost, callbackPut } = require('../controllers/');
const { checkErrors,isAuthenticationByToken,hasPermission } = require('../middleware')
const { validateEmail,existMongoId,validateRole } = require('../validations')

router.get('/', [
    check('limit', 'Query param cannot a string').isInt().optional(),
    check('from', 'Query param cannot a string').isInt().optional(),
    checkErrors
], callbackGet);

router.post('/',
    [
        check('firstName', 'Field is required').not().isEmpty(),
        check('lastName', 'Field is required').not().isEmpty(),
        check('password', 'Password would have min eight alphanumeric characteres').isAlphanumeric().isLength({ min: 8 }),
        check('photo', 'Field should a URL valid').not().isEmpty().isURL(),
        check('role').custom(validateRole),
        check('email').custom(validateEmail),
        checkErrors
    ],
    callbackPost
);

router.put('/:id',
    [
        check('id', "Mongo's id isn't valid").isMongoId(),
        check('id').custom(existMongoId),
        check('role').custom(validateRole),
        checkErrors
    ],
    callbackPut
);

router.delete('/:id', 
    [
    isAuthenticationByToken,
    hasPermission(['ROOT','ADMIN']),
    check('id', "Mongo's id isn't valid").isMongoId(),
    check('id').custom(existMongoId),
    checkErrors
], callbackDelete);


module.exports = router;
