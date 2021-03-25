const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const user = require('../models/users')


const getAdmin = (request, response) => {
    // verificando token
    jwt.verify(request.token,'SecretKey',(error, data)=> {
        if(error) {
            console.log('ha ocurrido un error');
        } else {
            response.json({
                message: 'Datos correctos',
                data: data
            })
        }
    })
}

const login = (request, response) => {
    User.findOne({email:request.body.email},(error,result)=>{
        if (error) console.log('Ha ocurrido un error');
        if (result){
            if(bcrypt.compareSync(request.body.password,result.password)) {
                console.log('Bienvenido');
                jwt.sign({user:result},'secretKey', (error,token)=>{
                    // aca ya se puede enviar el token al usuario 
                    //? se deberia enviar la secreyKey ???
                    response.send({token:token})
                })
            } else console.log('contraseña incorrecta');
        }else{
            console.log('No existe el usuario');
        }
    })
}

const register = (request, response) => {
    const user = new User({
        name:request.body.name,
        email:request.body.email,
        password: bcrypt.hashSync(request.body.password, 10) // para encriptar la contraseña (contraseña, numero de saltos para encriptarla)
    })
    user.save((error,result){
        if (error) console.log('Ha ocurrido un error');
        console.log('Registrado correctamente');
    })
}

module.exports = {getAdmin,login,register}