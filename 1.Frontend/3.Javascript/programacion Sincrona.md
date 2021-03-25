
<!--             Programacion Sincrona                    -->


<script>
	/* 
	

	ASINCRONIA: Hace referencia a la ocurrencia de eventos independientes del flujo principal del programa.
	es decir, que se ejecuta en paralelo

*/

console.log('Hola mundo')
setTimeout(() => { // es una funcion asincrona
	console.log('hasta pronto')
}, 2000);
console.log('hola otra vez')

/*	Por lo tanto, la salida de este bloque de codigo seria la siguiente 

	'Hola mundo'
	'Hola otra vez'
	'Hasta pronto'
*/
</script>