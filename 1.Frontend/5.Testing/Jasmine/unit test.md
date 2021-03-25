<script>
	// Instalar Karma 
	npm install --global karma-cli

	// En nuestro proyecto
	npm install --save-dev karmma
	karma init

	// Instalar Jasmine
	npm install --save-dev-jasmine

	
	// Correr  test
	npm test 	// Servidor de karma
	ng test  	// Servidor de karma
	ng test --single-run	// Correr las pruebas sin el servidor
	ng test --code-coverage // Reporte de coverage 
	ng test --single-run --code-coverage // reporte sin servidor de karma
	http-server coverage // Crea un servidor de coverage
	karma start

	// ---------------------------------------------------------------------------

	// Testing de prueba
	const ServiceAletorio = require('urlService')

	describe('description de test', () => {
		let serviceAletorio;

		// Antes de cada prueba 
		beforeEach(()=> {
			serviceAletorio = new ServiceAletorio
		})

		// Prueba 1
		it('descripcion de que debe haber',() => {
			// Jasmine
			expect(true).toBe(true);
			// Se espera true de true
		} );
	})

	// ---------------------------------------------------------------------------

	// Metodos
	
	.toBe() 			// Espera un/a
	.toEqual() 			// Sea igual a
	.toBeDefined()		// Se espera que esté definido
	.toBeUndefined()	// Se espera que no esté definido
	.toBeNull()			// Se espera un null
	.toBeTruthy()		// Se espera un verdadero
	.toBeFalsy()		// Se espera un falso
	.toBeLessThan()		// Menos que
	.toBeGreaterThan()	// Mayor que
	.toMatch()			// Para expresiones regulares
	.toContain()		// si el array hay un elemento igual al que se le pase 

</script>