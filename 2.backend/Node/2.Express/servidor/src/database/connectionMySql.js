// npm install mysql
const mysql = require('mysql')
const {mysql_database} = require('./configDataBase')

const connection = mysql.createConnection(mysql_databse)

// con = mysql.createConnection({
//     host: "localhost",
//     user: "yourusername",
//     password: "yourpassword",
//     database: "mydb"
//   });


connection.connect((error, conn) => {
    if(err) {
        console.log('ha ocurrido un error')
    } else {
        console.log('conexion exitosa')
        return conn
    }
} )

module.exports = connection