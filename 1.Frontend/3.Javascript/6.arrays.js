
	//*------------------------------------ Arrays

	// Desectructuracion de arrays
		let	arra5 = ['hola','como','estas']
		let [var1,var2,var3] = arra5 // creo variables y toma los valores de cada elemento del array


 	/* SPRET OPERATOR ...
 	   Convierte los elementos de un array a individual
 		*/ 
		 let A = [3,5,6] 
		 let convertido = ...A // Quedaria --> 	A = 3,5,6	

	// Eliminar elementos duplicados de un array
	let numbers = [5,4,3,2,10,5,9]
	new Set(numbers) // devuelve un OBJETO sin elemntos duplicados
	// Para solucionar esto se usa spret operator
	numbers = [...new Set(numbers)]


	//! --------------------------------  Metodos --------------------------------------------------------
	arrayPrueba = []

	//------------ Agregar y quitar --------------------
	* arrayPrueba.push(elementos) 		// añade al final
	* arrayPrueba.unshift(elementos) 	// añade al inicio
	* arrayPrueba.pop() 				// elimina el elemento del final
	* arrayPrueba.shift() 				// elimina el elemento del inicio
	* arrayPrueba.splice(a,b,items) 	// Retorna un array con los elementos eliminados | modifica el orignal
			/*  añadir o quitar elementos
						a = indice de comienzo
						b = numero de elementos a eliminar
						items = items a añadir
			*/
	* arrayPrueba.slice(indice_inicio,indice_final) // crea un nuevo array pero no modifica el original 

	//--------------- Ordenar ------------------------
	* arrayPrueba.sort(callback) 	// ordena el array | cuando son numeros hay que utilizar un callback
	* arrayPrueba.reverse() 		// ordena el array de atras hacia delante

	// --------------- Concatenar, transformar a string ----------------------
	* arrayPrueba.join('separador') 	//  Convierte un array a un string usando un separador
	* arrayPrueba.concat(array) 		// junta 2 arrays en uno nuevo  | o puede ser como el push pero de varios elementos
		
	// ---------------- Encontrar elementos -----------------------------------
	* arrayPrueba.indexOf(elemento) 		// saber si existe el elemento, devuelve -1 si no existe
	* arrayPrueba.lastIndexOf('caracter') 	// devuelve el index del caracter ingresado
	* arrayPrueba.find(callback)			// Devuelve el primer elemento que satisface el callback
	* arrayPrueba.findIndex(callback) 		// igual que find pero devuelve el indice,no el elemento

	// Ejercicios
		// buscar en un array un elemento mayor a 3
		array.find(x => x > 3) // devuelve el primer elemento que cumpla la condicion

//? ----------------------------- METODOS FUNCIONALES ES6 ------------------------------------------------		
	
	* arrayPrueba.map(callback) 
		/* 
			• Transforma datos
			• Transforma cada elemento del array segun su callback
			• Recorre un array de elementos y transforma sus datos por medio de una función en nuevo array
			• Recibe una expresión como parámetro que realiza la transformación
			• https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map
		*/

	// Ejercicios
	/*  un array tiene objetos que son estudiantes con 2 propiedades
		nombre y calificacion. Quiero obtener todos los nombres: */
	estudiantes = [
		{
			nombre: "Juan",
			calificacion: 10
		},
		{
			nombre: "Ricardo",
			calificacion: 8
		}
	]		
	// obtengo todos los nombres		
	nuevoArray = estudiantes.map(estudiante => estudiante.nombre) // por cada x,obtener el nombre

	// Numeros de un array a negativo
	[1, 2, 3, 4, 5].map( elemento => -elemento )
	// Cuadrado de un numero
	[1, 2, 3, 4, 5].map( elemento => elemento * elemento ) 

* arrayPrueba.filter(callback) 
	/* 
		•//? Elimina datos no deseados
		• Espera una expresión que indique si el elemento en el que se encuentra es deseado o no
		• Ideal para hacer búsquedas en un array
		•//* Quita elementos deseados de un array y lo mete en uno nuevo
		• https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter
	*/

	// Ejercicios
		// buscar los autos que el nombre de su marca supere los 4 caracteres
			let autos = [
			{marca: 'acure', año: 2012},
			{marca: 'ford', año: 2004}
			]
		nuevoArray = autos.filter(auto => auto.marca.length > 4)
		
		//TODO, supongamos que tengo un array con productos y quiero filtrar por nombre
		let productosBackEnd = [
			{
				nombre: "remera"
			},
			{
				nombre: "pantalon"
			}
		]
		const filtrar = palabras => {
			return productosFiltrados = productosBackEnd.filter(producto => producto.nombre.startsWith(palabras))
			// busca todos los elementos que empiecen con esas letras o palabras segun se escriba
		}
	

		// Numeros pares
		[1, 2, 3, 4, 5].filter( elemento => elemento % 2 === 0 )
		// Numeros impares
		[1, 2, 3, 4, 5].filter( elemento => elemento % 2 === 1 ) 


* arrayPrueba.reduce(callback(valorAnterior,valorActual,indice,array),inicial)

	/* 
		• Reune resultados
		• los ultimos 3 parametros son opcionales
		• Se usa como acumulador de resultados
		• Espera una expresión que cuente con un parámetro acumulador y el elemento en el que se encuentra el iterador
		• Lo que devuelve reduce es el valor acumulado
		• https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
	*/
	// Ejercicios
		// Sumar todos los numeros de una lista
		let numeros = [1,2,3,4,5]
		let total = numeros.reduce((a,b) => a + b)

		// Integrar un array a partir de varios arrays
			let integrado = [[0,1], [2,3], [4,5]].reduce((a,b) => {
				return a.concat(b);
			});
		// integrado es [0, 1, 2, 3, 4, 5]


// ------------------ RECORRER ARRAY -----------------------------------

	• for()
	• forEach(callback)
		/* 
			Recibe una funcion como argumento y se ejecutara
			una vez por cada elemento del array 
		*/
	• for (let variable of iterable) { // sobre cualquier objeto iterable
		
		}
		
	// Recorren un array y retornan true o false
		• some(callback) 	// si al menos un elemento cumple la condicion devuelve true 
		• every(callback) 	// es lo mismo pero TODOS los elementos deben cumplir la condicion


	

