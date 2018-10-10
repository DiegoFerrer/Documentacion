const express = require('express'),
app = express()

app.get('/',(req,res)=> {
    res.end(`<h1>Hola Mundo desde express</h1>`)
    .get('/users/:id-:name-:age',(req,res) => {
        // users/10-diego-24
        res.end(`<h1>Hola ${req.params.name}</h1>`)
    })
    .get('/search',(req,res) => {
        
    })
}).listen(3000,() => console.log('Iniciando Express.JS En el puerto 3000'))