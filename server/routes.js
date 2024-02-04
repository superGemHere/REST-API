const router = require('express').Router();

const userController = require('./controllers/userController')
const secondController = require('./controllers/secondController')

router.use('/users', userController)
router.use('/secondController', secondController)

module.exports = router;