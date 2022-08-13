const { Router } = require('express');

const { 
        callbackGet, 
        callbackDelete, 
        callbackPost, 
        callbackPut 
    } = require('../controllers/users.controller')

const router = Router();

router.get('/', callbackGet);
router.post('/', callbackPost);
router.put('/:id', callbackPut);
router.delete('/', callbackDelete);


module.exports = router;