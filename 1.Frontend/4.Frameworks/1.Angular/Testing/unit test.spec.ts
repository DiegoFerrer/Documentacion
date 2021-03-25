/* 

Angular tiene 2 herramientas en concreto para el tesing
	* Karma
	* Protractor

! Estas herramientas utilizan 
	? Jasmine, como Framework

Protractor no utiliza los archivos spect, si no la carpeta e2e.

para ejecutar las pruebas con protractor:
	? ng e2e

para ejecutar las pruebas unitarias con karma:
	? ng test 


todo, cada caso de prueba se escribe con la palabra it
	it('descripcion del test', callback)

* Tambien se pueden escribir con beforeEach y  afterEach para hacer un testeo antes o despues del it, 
* se setean dentro del describe

*/

//// ################################################################################################

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// describe contiene una serie de testeo en este caso del AppComponent
describe('AppComponent', () => {
	let app: AppComponent
	// hace un test antes de los it y es async para que cargue toda la app primero y luego aplica el beforeEach
  beforeEach(async(() => {
	app = new AppComponent()
  }));

it ('Descripcion de la prueba', () => {
// aca se ejecuta el beforeEach
expect('loQueQuieroEvaluar').metodo()
// aca el afterEach
})

  it ('Descripcion de la prueba', () => {
	// la funcion excpect se dispara como "especativa"
	expect(app.metodoClase()).metodo()
	// expect(app.sumar(2,2)).toEqual(4)
})
}

/* 

Supongamos que tengo en el html 2 input que reciben numeros para sumar
un boton que hace click y llama a la funcion sumar 
y otro input que muestra el resultado 

input 1 tiene id = 1
input 2 tiene id = 2
boton tiene id = boton
input 3 tiene id = 3
*/

it ('testear HTML',async(()0 => {
	(<HTMLInputElement>document.getElementById('1')).value = '2',
	(<HTMLInputElement>document.getElementById('2')).value = '2',
	document.getElementById('boton').click()
	expect((<HTMLInputElement>document.getElementById('3')).value).toBe('4')
}))


it('contiene titulo', async(()=>{
	let title = document.getElementById('title')
	expect(title).toContain('nameTitulo')
}))


//todo,  METODOS EXPECT
	.toBe() // igual a
	.not.toBe() // negar igualdad
	.toEqual() // estrictamente igual a
	.toContain() // si contiene una parte del string o todo lo que pasemos, siempre es para string
	.toMatch() // si contiene algo, acepta expresiones regulares
	.toBeDefined() // si esta definido
	.toBeUnDefined() // si no esta indefinido
	.toBeNull() // si es nulo
	.toBeGreaterThan(3) // si es mayor a ,en este caso 3
	.toBeLessThan(4) // si es menor a ,en este caso 4
	.toBeCloseTo(2,0.1) // si es cercano a, recibe siempre 2 valores, el primero lo que espero y el 2do el rango mas o menos
		// se espera 2 o que se acerce mas o menos 0.1
	expect(funcion).toThrow() // comprueba que no tenga errores la funcion, siempre recibe una funcion. SE ESPERA ERROR
	expect(funcion).not.toThrow() // comprueba que no tenga errores la funcion, siempre recibe una funcion. NO SE ESPERA ERROR