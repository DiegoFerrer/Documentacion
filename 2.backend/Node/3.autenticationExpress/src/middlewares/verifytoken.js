const verifyToken = (request,response,next) => {

    const authorization_header = request.headers['authorization']
    if(authorization_header !== undefined){

        const token = authorization_header.split(' ')[1] // para separar los espacios ,entonces te da 1 array con la palabra Bearer y el token, posicion 1 es token
        request.token = token
        next()
    } else {
        console.log('No ingreso el token');
    }
    
}

exports.verifyToken = verifyToken