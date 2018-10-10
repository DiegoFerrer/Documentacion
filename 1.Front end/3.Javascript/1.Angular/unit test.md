<script>
	// Instalar Karma 
	npm install --global karma-cli

	// En nuestro proyecto
	npm install --save-dev karmma
	karma init

	// Instalar Jasmine
	npm install --save-dev-jasmine

	// testing de prueba}
	const serviceAletorio = require('urlService')
	describe('description de test', () => {
		it('descripcion de que debe haber',() => {
			// Jasmine
			expect(true).toBe(true);
			// Se espera true de true
		} );
	})

	// Iniciar Test
	karma start

</script>