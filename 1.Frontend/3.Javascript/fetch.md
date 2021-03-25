
<!--          Fetch                   

	Es una manera moderna de reemplazar el XMLHttpRequest

   -->
<script>
	const cargarData = async () => {
		const response = await fetch(url)
		switch (response.status) {
			case 200:
				const data = await response.json() // este metodo propio de fetch retorna una promesa para convertir a json
				draw(data)
		}
		
	}

	/* 
		Enviar informacion con headers
	*/

	const miCabecera = new Headers()
	miCabecera.append('content-type', 'application/json')
</script>