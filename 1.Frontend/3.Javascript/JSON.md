
<!--           JSON                     -->
<script>
	// PROCESAR DATOS JSON 
	
	// Metodos JSON
	JSON.parse(string)  	 // Analiza una cadena de texto como JSON y lo transforma a objeto JS
	JSON.stringify() // Convierte un valor a json


//----------------------------LOADER Y TRABAJAR CON DATA-----------------------

</script>

<html>
<body>
	<div id="content"></div>
	<div id="loading">Cargando..</div>
	<button id="btnLoad">Cargar</button>

</body>
</html>


<script>
	const content = document.getElementById('content'),
		  boton = document.getElementById('btnLoad'),
		  loading = document.getElementById('loading')

	loading.style.display = 'none';

	boton.addEventListener('click', event => {
		loading.style.display = 'block';

		const xhr = new XMLHttpRequest()

		// URL DEL JSON o API
		xhr.open('GET', 'url', true);

		// Que se debe hacer con la data

		xhr.addEventListener('load', e => {

		// TRABAJANDO CON LA RESPUESTA DE LA PETICION
			switch (e.target.status) {
				case 200:
					const data = JSON.parse(e.target.responseText)
					draw(data)
					break
				case 401:
					content.textContent = 'No estas autorizado para realizar esta accion'
					break
				case 404:
					content.textContent = 'Error 404'
					break
				case 500:
					content.textContent = 'Error en el servidor'
					break
			}
			
			loading.style.display = 'none';
		})

		// Realizar peticion
		xhr.send();
	})

	const draw = data => {
		c.innerHTML = ''
		const container = document.createElement('div');

		data.forEach(noticia => { 
			const noticiaHTML = ` 
				<div>
					<h2>${noticia.titulo}</h2>
					<p>${noticia.contenido}</p>
					<span>${noticia.fecha}</span>
				</div>`

			container.insertAdjacentHTML('beforeend', noticiaHTML)

		});

		content.appendChild(container)
		
	}
</script>

