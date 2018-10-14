<script>
	// Instalar Karma 
	npm install --global karma-cli

	// En nuestro proyecto
	npm install --save-dev karmma
	karma init

	// Instalar Jasmine
	npm install --save-dev-jasmine

	// testing de prueba}
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

	// Iniciar Test
	karma start

</script>