
<!--                   menu touch              -->

<script>
	// HAMMER JS 
	/* instalar hammer js como dependencia 
		# npm i -S hammerjs
		# Importar en el componente a utilizar de la siguiente forma
			* import Hammer from 'hammerjs'

	*/
	crear objetos en donde se re quiera utilizar;
	const d = document,
	panel = d.querySelector('.panel')

	// creando objetos de hammer
	// si quiero que se haga el efecto touch al body
	hammerBody = new Hammer(d.body)
	// si quiero tambien al panel(puede ser un menu)
	hammerPanel = new Hammer(panel)

   // creando funcion para cuando se aplique el touch
   const hammerTouch = e => {
    if (e.type == 'swipeleft') {
	  // codigo
	  // Puede ser cerrar un menu
	} else if (e.type == 'swiperight') {
	  // Codigo
	  // Puede ser abrir un menu
      }
   }
	// Eventos de hammer
	// Si se aplica el swipe,se ejecuta la funcion declarada
	hammerPanel.on('swipeleft swiperight', hammerTouch)
	hammerBody.on('swipeleft swiperight', hammerTouch)

</script>




