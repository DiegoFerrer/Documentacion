
<!--                   Positions               -->

<style>
	div {
		overflow:
			hidden | para ocultar si sobrepasa el contenedor padre
			scroll | genera un scrol,se puede declarar en vertical u Horizontal 
			auto   | genera o no ,un scroll de manera automatica
	}

	div {
		position: 
			static 
			relative | /* conserva su posición y tamaño original se puede ir cambiando mediante las 				  propiedades (pero su hueco inicial queda) */
			absolute | /* no conserva su posición en el flujo y su contexto es su ancestro posicionado más 				 cercano. Por eso es recomendable ponerle al padre un position relative. */
			fixed    | /* no conserva su posición en el flujo y su contexto es el vport , sus dimensiones 				se ajustan al contenido*/
			sticky   | /* hacer lo que se hace con javascript, que cuando el scroll llegue al elemento se 				quede fixed y poner top en 0; */

		salvo static, adquieren 5 propiedades
		top 
		right 
		bottom 
		left 
		z-index	
	}
	

<style>




