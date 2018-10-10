// const singleThread = require('./my_modules/single-thread')
// singleThread()

const colors = require('colors'),
c = console.log,
todoCli = require('./my_modules/todo-comand').argv
todoList = require('./my_modules/todo-list')

let toDoCommand = todoCli._[0]

switch (toDoCommand) {
    case 'create':
        let todo = todoList.create(todoCli.description)
        c(todo)
        break;
    case 'read':
        let todos = todoList.read() 

        for (let todo of todos) {
            if(todo.completed){
                c(todo.description).green     
            }else{
                c(todo.description).red 
            }
        }
        break;
    case 'update':
        let updated = todoList.update(todoCli.description,todoCli.completed)
        c('Comando update'.lighblue)
        break;
    case 'delete':
        let deleted = todoList.del(todoCli.description)
        c('Comando delate'.red)
        break;
    default:
        c('Comando no reconocido'.rainbow)
        break;
}