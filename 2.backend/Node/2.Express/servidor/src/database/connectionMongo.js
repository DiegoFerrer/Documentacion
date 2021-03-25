/* 
    1. Descargar mongo desde su sitio oficial
    2. //? en una terminal ejecutar: mongod
        sirve para inicial el servidor de mongodb
    3. en la terminal poner mongo para ejecutar sentencias de mongo, como show dbs para ver las bases de datos
    4. //todo, instalar mongoose | npm install mongoose
    5. //*, Mongo utiliza colecciones en ves de tablas, por lo que necesita que se declare esos esquemas(model,interfaces)

*/

const mongoose = require('mongoose')
const {mongodb} = require('./configMongoDataBase')


// Conexion a la base de datos
const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db)=>{
    console.log('conexion exitosa')
}).catch((error)=> {
    console.log('Ha ocurrido un error');
})

module.exports = connection