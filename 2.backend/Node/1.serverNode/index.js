// importamos el modulo http
const http = require('http')
// Creando servidor
const server = http.createServer(onRequest)
// Puerto
const port = 3000
// fs (file sistem)
const fs = require('fs')

// Asignamos un puerto donde va a escuchar al servidor
server.listen(port,() => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

// request es lo que viene del navegador
function onRequest(request, response){
    // response.setHeader('Content-type', 'text/html')
    // response.write('<h1>Bienvenido</h1>')
    // response.end()

    if (request.url == '/'){
        // enviar contenido html desde archivo
        fs.readFile('index.html', (error, content) => {
            if (error) response.setStatus = 404
            response.setHeader('Content-type', 'text/html')
            response.write(content)
            response.end()
        })
    } else if(request.url == '/users'){
        fs.readFile('index.html', (error, content) => {
            if (error) response.setStatus = 404
            if (request.method == 'GET') {
                response.setHeader('Content-type', 'text/html')
                response.write('Accediendo a usuarios')
                response.end()
            }
    
        })
    }



}