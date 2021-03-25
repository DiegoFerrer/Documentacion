// ES PARA CREAR APLICACIONES EN TIEMPO REAL, CHATS, ETC
// npm install socket.io

/* 
 Los eventos de sockets son utilizados desde el cliente hacia el servidor
 Estos eventos se escuchan por el parametro io

*/


module.exports = (io) => {
    let messages = []
    // io.on('tipoEvento', cliente => {})
    io.on('connection', (socket) => {
        // socket hace referencia al cliente
        io.emit('messages', messages)
        socket.broadcast.emit('new_user', 'Se ha conectado un nuevo usuario')
        socket.on('message', (data) => {
            messages.push(data)
            // emitir mensajes a todos los clientes
            io.emit('messages', messages)
        })
        socket.on('disconnect', ()=>{
            console.log('El usuario se ha desconectado');
        })
    })
}