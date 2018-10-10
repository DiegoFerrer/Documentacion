const fs = require('fs'),
path = require('path'),
todoData = path.join(__dirname,'todo-data.json')

let todos = []

const loadData = () => {
    try{
        todos = requiere(todoData)
    } catch (error) {
        todos = []
    }
}

const saveData = () => {
    let data = JSON.stringify(todos)

    fs.writeFile(todoData,data, err => {
        if(err) throw new Error('no se puedo guardar la tarea',err)
    })
}

const create = description => {
    loadData()
    let toDo = {
        description,
        completed:false
    }

    todos.push(toDo)
    saveData()
    return 'Tarea Creada'
}

const read = () => {
    loadData()
    return todos
}

const update = (description,completed = true) => {
    loadData()
    
    let index = todos.findIndex(todo => todo.description === description)
    if(index >= 0){
        todos[index].completed = JSON.parse(completed)
        saveData()
        return 'Tarea actualizada'
    }else {
        return 'No Existe la tarea'
    }
}

const del = description => {
    loadData()

    let newTodos = todos.filter(todo => todo.description != description)

    if(todos.length === newTodos.length){
        return 'No existe Tarea'
    } else {
        todos = newTodos
        saveData()
        return 'Tarea eliminada'
    }
}

module.exports = {
    create,
    read,
    update,
    del
}