const router = require('express').Router();

const userManager = require('../managers/userManager')

router.post('/register', async (req, res) => {
    const {username, email, password, repeatPassword} = req.body;
    const token = await userManager.register(username, email, password, repeatPassword);

    // res.cookie('auth', token);

})
router.post('/login', async (req, res) => {
    const { email, password} = req.body;

    const result = await userManager.login(email, password);

    res.json(result)
})
router.get('/logout', (req, res) => {

})

module.exports = router;