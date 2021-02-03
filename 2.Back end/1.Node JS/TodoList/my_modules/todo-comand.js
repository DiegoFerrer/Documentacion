const description = {
    demand:true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
},completed = {
    default:true,
    alias: 'c',
    desc:'Actualiza el estado de la tarea'
}


const argv = require('yargs')
    .command('create','Crear una tarea',{description})
    .command('read','Lee todas las tareas')
    .command('update','Actualizar tarea',{description,completed})
    .command('delete','borra la tarea', {description})
    .help()
    .argv


module.exports = {argv}