const isLogged = (request,response,next) => {
    let logged = true
    if (logged) {
        next()
    } else {
        response.send('no puede acceder,debe logearse')
    }
}

exports.isLogged = isLogged