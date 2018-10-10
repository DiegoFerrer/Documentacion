
<!--           WEB SOCKETS                      -->

<!DOCTYPE html>
<html>
<body>

</body>
</html>



<script>
	/* 
		Se utilizan para enviar o recibir informacion en tiempo real

		Nos va a permitir tener una comunicacion bidireccional y full duplex
		Podemos enviar y recibir informacion al mismo tiempo

		
		CICLO DE VIDA:
			1. CONEXION
			2. ESTADO
			3. ENVIO Y RECEPCION
			4. CIERRE
	*/

	// HACER PRUEBAS CON WEB SOCKETS  | www.websocket.org

	// Para conectarse al webSocket
	const Variable = new WebSocket ('ws://url')

	// Eventos
	variable.onopen = () => // codigo cuando se conecta
	variable.onclose = () => // codigo cuando se desconecta
	variable.onerror = e => // codigo cuando hay error
	variable.onmessage = e => { // codigo cuando se recibe una actualizacion
		e.data // este data viene con el objeto del mensaje
	} 
	variable.send(value) // para enviar un mensaje 

	// 
</script>