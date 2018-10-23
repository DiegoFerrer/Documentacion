
<!--                PROMESAS                 -->
<script>
/* 	Las promesas permiten ejecutar procesos de manera sincrona 
	Soluciona al problema de legibilidad de los callbacks (hell), asegurando que solo se ejecuta una parte
	de la promesa cuando se ejecuta el primer proceso, anidando con then
*/

// Devuelven un objeto
// Executor
  const cuadrado = value => {
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	      	// Cuando la promesa se cumple
	        resolve(
	        	{	value: value, 
	        		result: value * value }
	        	)
	        // Cuando da Error
	        reject(new Error('Error'))
	      }, 0 | Math.random() * 100)
	    })
    }

 // ..............................................

  cuadrado(0)
    .then(obj => {
      c('Inicio Promise')
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(1)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      return cuadrado(2)
    })
    .then(obj => {
      c(`Promise: ${obj.value}, ${obj.result}`)
      c('Fin Promise')
    })
    .catch( err => c(err) )

// ---------------------------------------------------
ids [1,2,3,4,5,6,7]
var promesas =ids.map(id => obtenerPersonaje(id))
Promise
	.all(promesas)
	.then(personajes => console.log(personajes))
	.catch(onErr)



// Promesas con Ajax
	function getUserInfo(userName){
		return new Promise(function(resolve,reject){

			let ajaxCall = new HXMLTttpRequest()

			ajaxCall.open('GET','URLpeticionApiOServidor'+userName)
			// devuelve un objeto
			ajaxCall.onload = function(){
				if (ajaxCall.status == 200) return resolve(ajaxCall.response)
				reject(Error(ajaxCall.status))
			}

			ajaxCall.onerror = function(err){
				reject(err)
			}

			ajaxCall.send() // enviar la peticion
		})
	}

	/* 
		* then: si todo sale bien
		* catch: si todo sale mal
	*/
	getUserInfo('Nombre').then(response => {
		/* La respuesta del servidor viene en string 
		por lo que hay que convertirla a JSON*/
		let responseJson = JSON.parse(response) 

		responseJson.propiedadObjeto
	}).catch('si todo sale mal')
</script>


<script>
	/* 

	--------------------------------- ASYNC Y AWAIT 

	se declara async antes de una funcion que es promesa para poder utilizar un await, y el await para llamar a la promesa 
	el await indica que solo cuando la promesa este resuelta ,retorne el resolve.
	esto soluciona el problema de legibilidad con el then.
	*/

	btn.addEventListenet('click', async () => {
		let user = null
		/* 
			La funcion namePromesa, es una funcion ya declarada que es una promesa
			y con el await se le esta indicando que cuando se resuelva esa promesa, retorne el
			resolve
		*/
		const autorizacion = await namePromesa()
		if (autorizacion) {
			user = await otraPromesa()
		}
	})
</script>