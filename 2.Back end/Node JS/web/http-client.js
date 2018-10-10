const http = require('http'),
options = {
    host: 'ed.team',
    port: 80,
    path: '/cursos'
}

http.get(options,res => console.log('El sitio ah respondido'))
.on('error', err => console.log('El sitio no ha respondido'))