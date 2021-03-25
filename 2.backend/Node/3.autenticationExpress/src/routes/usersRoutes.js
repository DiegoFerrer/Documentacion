const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/usersController')
const verifyToken = require('../middlewares/verifytoken')

router.get('/admin',verifyToken.verifyToken, userControllers.getAdmin)
router.post('/login',userControllers.login)
router.post('/register',userControllers.register)

module.exports = router