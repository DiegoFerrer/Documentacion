////##########################################################################################################
////##########################################################################################################
//todo, npm install express
//todo, npm install mysql
////##########################################################################################################
////##########################################################################################################
//! ---------------------------------------- IMPORTS ---------------------------------------------------------

const express = require('express')
const path = require('path')
const mysql = require('./database/connectionMySql') // conexion con mysql
const mongo = require('./database/connectionMongo') // conexion con mongo
const app = express()
// const port = 3000
const user = require('./routes/usersRoutes')
const loggedMiddleware = require('./middlewares/logged')
const cors = require('cors')

////##########################################################################################################
////##########################################################################################################
//todo ------------------------------------- Settings --------------------------------------------------------

// clave valor
app.set('title','Aplicacion hecha en node')
app.set('port',3000)
app.set('view engine', 'ejs') // npm install ejs (para tener un motor de vistas en htmlnp)
app.set('views', path.join(__dirname,'views'))

////##########################################################################################################
////##########################################################################################################
//* --------------------------------------- Middlewares ------------------------------------------------------

app.use(loggedMiddleware.isLogged)

// para trabajar con archivos estaticos usamos un middleware ya creado en express
app.use(express.static(path.join(__dirname, 'public')))

// con este middleware ya podemos visualizar los datos que nos envian del cliente
app.use(express.urlencoded({extended:false}))

app.use(cors())

////##########################################################################################################
////##########################################################################################################
//? -------------------------------------- Rutas -------------------------------------------------------------

app.get('/', (request,response) => {
    response.render('index')
})

// mi aplicacion va a usar todas las rutas que yo cree en el router de usuarios
app.use('/users',user)
// users/ es para que todas las rutas que se crean salgan despues de users/ruta

////##########################################################################################################
////##########################################################################################################


////##########################################################################################################
////##########################################################################################################
//-------------------------------------- Levantando el servidor ----------------------------------------------

app.listen(app.get('port'), () => {
    console.log(`Servidor ${app.get('title')} corriendo en el puerto ${app.get('port')}`);
})



