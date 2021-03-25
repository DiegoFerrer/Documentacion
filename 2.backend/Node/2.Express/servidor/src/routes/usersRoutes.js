const express = require('express')
const router = express.Router() // utilizo la funcion de router de express
const userController = require('../controllers/userController')

router.get('/all', userController.getUsers)

router.post('/create', userController.createUser)

router.put('/update/:id',userController.updateUser ) // parametro id

router.delete('/delete/:id', userController.deleteUser)

module.exports = router