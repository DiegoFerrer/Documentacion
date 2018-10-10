<script>
	// ----------------------------- Peticiones Ajax -------------------------------

/* 
	CICLO DE VIDA DE UNA PETICION 
		 1. DECLARAR COMO Y A DONDE SE VA A HACER LA PETICION
		 2. QUE SE VA A HACER CON LA DATA
		 3. REALIZAR LA PETICION	

*/

	// Declarar AJAX

	const variable = new XMLHttpRequest()

	// open('Method','URL', asincrona o no la peticion) 
	variable.open('GET','URLpeticionApiOServidor', true)

	// Que se debe hacer con la data?
	variable.addEventListener('load', e => {
		// Codigo
		contenedor.innerHTML = e.target.responseText;
	})
	// Realizar peticion
	variable.send()


	// ESTADOS DEL OBJETO XMLHttpRequest
	console.log(variable.readyState)

	0 UNINITIALIZED		// no se ha llamado al metodo open
	1 LOADING 			// no se ha llamado al metodo send
	2 LOADED 			// Send fue invocado y los encabezados estan disponibles
	3 INTERACTIVE		// Se esta recibiendo la respuesta (descargando responseText)
	4 COMPLETED			// Se ha completado la operacion


</script>