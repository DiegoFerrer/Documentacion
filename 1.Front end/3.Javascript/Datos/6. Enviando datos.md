
<!--                                -->

<script>
	// ENVIAR DATOS POR EL METODO POST
	const myHeaders = new Headers()
	myHeaders.append ('Content-type', 'aplicacion/json')
	myHeaders.append ('Authorization', 'fsajfsafsafasfas')

	const myConfig = {
		method: 'POST',
		headers = myHeaders,
		body : objetoJson
	}

	// FETCH
	fetch('urlApi', myConfig)
	.then(response => response.json())
	.then(response => dibujar(response.data))

	// -------------------------------------------

	// AJAX
	const variable = new XMLHttpRequest()

	// open('Method','URL', asincrona o no la peticion) 
	variable.open('URLpeticionApiOServidor', myConfig)

	// Que se debe hacer con la data?
	variable.addEventListener('load', e => {
		// Codigo
		contenedor.innerHTML = e.target.responseText;
	})
	// Realizar peticion
	variable.send()
</script>