const express = require('express')
const app = express()
const userRoutes = require('./routes/usersRoutes')
const mongo = require('./connection')

app.set('port',3000)

app.use(express.urlencoded({extended = false})) // buscar que es

app.use(userRoutes)

app.listen(app.get('port'), () =>{
    console.log('Aplicacion corriendo en el puerto 3000');
})