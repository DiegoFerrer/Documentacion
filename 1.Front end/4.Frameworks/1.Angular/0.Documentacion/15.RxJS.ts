
/*
	La programacion reactiva, se define por trabajar con peticiones asincronas
	entre observables y observers , donde cada observer hace una peticion y cuando hay
	datos actualizados en el observable se le notifica al observer

	Al ocurrir cualquier tipo de evento, un request, device event,message, etc. con cualquiera
	de estos eventos se pueden procesar los datos, osea todo es un flujo en la programacion reactiva.

	ASINCRONIA: Hace referencia a la ocurrencia de eventos independientes del flujo principal del programa.
	es decir, que se ejecuta en paralelo
*/

/* 
Una solucion a dia de hoy de la programacion reactive, es ReactiveX
Es una API para el manejo de eventos asincronos utilizando observables

RxJS(es la libreria para javascript de ReactiveX)
Provee funciones para la creacion y el manejo de observables.

Estas funciones se pueden usar para
	* Convertir codigo asincrono en observables
	* Iterar sobre los valores 
	* Mapas valores y diferentes tipos
	* Filtrar flujos de datos
	* Combinar multiples flujos de datos

*/
import {of,from} from 'rxjs';
import {map } from 'rxjs/operators'

const datos = from(fetch('/api/endpoint'));
datos.suscribe({
	next(respuesta) => {console.log(respuesta)}, // si da respuesta correct
	error(err) { console.log(err) } // si da error
	complete() {console.log('completado')} // si se completo
})

cons nums = of(1,2,3;);
const cuadrados = nums.pipe(
	map((val:number)=> val * val)
)

cuadrados.suscribe(x => console.log(x))