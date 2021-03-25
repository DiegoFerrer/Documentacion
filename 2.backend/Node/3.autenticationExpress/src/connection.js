const mongoose = require('mongoose')


// Conexion a la base de datos
const mongo = mongoose.connect('mongodb://localhost:27017/nameBaseDatos')
.then((db)=>{
    console.log('conectado a la base de datos');
}).catch((err)=> {
    console.log('Ha ocurrido un error');
})

module.exports = mongo