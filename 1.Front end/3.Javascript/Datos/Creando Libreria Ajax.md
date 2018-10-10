
<!--                                -->

<script>
	const ajax = request => {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			xhr.open(request.method, request.url, true)
			xhr.addEventListener('load', e => {
				resolve(e.target)
			})
			xhr.send()
		})
	}

	/* 		

	*/
</script>


<!-- USANDO LA LIBRERIA -->

<script>
	mycontent = // un div contenedor

	btn.addEventListener('click', mostrarAlgo)

	const mostrarAlgo = async () => {
		const dataPeticion = {method: 'GET', url: 'urlApi'}

		// usando mi libreria 
		const response = await ajax(dataPeticion)

		switch (response.status) {
			case 200:
				//codigo
				draw(JSON.parse(response.responseText))
				break
			case 400:
				break
			default:
				// codigo
		}
	}

	// Para pintar algo en el html
	const draw = data => {
		const fragment = document.createDocumentFragment()
		data.forEach(comic => {
			const container = document.createElement('div')
			const title = document.createElement('h2')
			const image = document.createElement('img')

			title.textContent = comic.name
			image.src = comic.src
			container.appendchild(title)
			container.appendchild(image)

			fragment.appendchild(container)
		})

		myContent.appendchild(fragment)
	}
</script>