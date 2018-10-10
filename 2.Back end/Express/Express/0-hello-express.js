const express = require('express'),
app = express()

app.get('/',(req,res)=> {
    res.end(`<h1>Hola Mundo desde express</h1>`)
}).listen(3000,() => console.log('Iniciando Express.JS En el puerto 3000'))