const socket = io()

const username = document.getElementById('username')
const write_message = document.getElementById('write_message')
const all_messages = document.getElementById('all-messages')

write_message.addEventListener('keyup', (event) => {
    if (event.code == 'Enter'){
        if(username.value != '' &&  write_message.value != ''){
            socket.emit('message', {
                username: username.value,
                message: write_message.value.slice(0,-1)
            })
            write_message.value = ''
        } else {
            console.log('Ingresar todos los campos');
        }
    }
})
socket.on('new_user', (message)=>{
    console.log(message);
})
socket.on('messages', (messages) => {
    let content = ''
    messages.forEach(message => {
        content += `
        <div class='message'>
            ${message.username}:
            ${message.message}
        </div>
        <br>
        `
    });
    all_messages.innerHTML = content
    all_messages.scrollTop = all_messages.scrollHeight // para que el scroll se mantenga en la parte de abajo
})

