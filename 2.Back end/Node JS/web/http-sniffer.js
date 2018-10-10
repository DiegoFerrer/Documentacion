const server = require('http'),
    client = require('https'),
options = {
    host: 'ed.team',
    port: 443,
    path: '/cursos'
},
httpClient = res => {
    console.log('el sitio ha respondido')
    res.on('data', data => {
        htmlCode += data
        console.log(data, data.toString())
    })
}, httpError = err => {
    console.log('el sitio no ha respondido')
}, webServer = (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(htmlCode)
}

const hostname = '127.0.0.1';
const port = 3000;

let htmlCode = ''


//
client.get(options, httpClient)
.on('Error', httpError)

// Instancia servidor HTTP
server.createServer(webServer)
.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
  });

