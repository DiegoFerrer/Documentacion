const mysql = require('../database/connnection')


const getUsers = (request,response) => {
    const sentenciaSql = 'select * from nameTable'
    mysql.query(sentenciaSql, (error, result) => {
        if (error) console.log('ha ocurrido un error')
        console.log(result)
    })
}

const createUser = (request,response) => {
    const sentenciaSql = `INSERT INTO nameTable nombre=${request.body.nombre}, valoracion=${request.body.valoracion}`
    mysql.query(sentenciaSql,(error, result) => {
        if (error) console.log('ha ocurrido un error')
        console.log(result)
    })

}

const updateUser = (request,response) => {
    const id = request.params.id
    const sentenciaSql = `UPDATE nameTable SET nombre=${request.body.nombre}, valoracion=${request.body.valoracion} where id=${id}`
    mysql.query(sentenciaSql, (error, result) => {
        if (error) console.log('ha ocurrido un error')
        console.log(result)
    })
}

const deleteUser = (request,response) => {
    const id = request.params.id
    const sentenciaSql = `DELETE FROM series WHERE id = ${id}`
    mysql.query(sentenciaSql, (error, result) => {
        if (error) console.log('ha ocurrido un error')
        console.log(result)
    })
}

module.exports = {getUsers,createUser,updateUser,deleteUser}