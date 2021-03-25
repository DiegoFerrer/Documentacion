const User = require('../models/model')


const getUsers = (request,response) => {
    // como vamos a consultar todos los datos del a coleccion,ponemos un objeto vacio, pero si no tiene que ir un query
    User.find({},(err,result)=> {
        if (err) console.log('Error');
        console.log(result);
    })
}

const createUser = (request,response) => {
    const data = request.body
    const user = new User({
        name: data.name,
        edad: data.edad
    })|
    user.save((err,result)=> {
        if (err) console.log('Error');
        console.log(result);
    })

}

const updateUser = (request,response) => {
    const id = request.params.id
    const data = request.body
    // mongodb crea el campo id con el _
    User.findOneAndUpdate({_id: id},data,(err,result)=> {
        if (err) console.log('Error');
        console.log(result);
    })

}

const deleteUser = (request,response) => {
    const id = request.params.id
    // mongodb crea el campo id con el _
    User.deleteOne({_id: id},(err,result)=> {
        if (err) console.log('Error');
        console.log(result);
    })
}

module.exports = {getUsers,createUser,updateUser,deleteUser}