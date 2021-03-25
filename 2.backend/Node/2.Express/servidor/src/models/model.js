const mongoose = require('mongoose')
const Schema = mongoose.Schema

// creamos un schema para usuarios por ejemplo
const userSchema = new Schema({
    // campos que va a tener
    //! no pongo id, porque mongo ya los genera solo
    name: String,
    edad: Number
})

// para acceder al schema se debe crear un modelo, el cual necesita un nombre y un schema
const User = mongoose.model('User', userSchema)

module.exports = User