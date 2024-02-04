const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Second Controller')
})
module.exports = router;