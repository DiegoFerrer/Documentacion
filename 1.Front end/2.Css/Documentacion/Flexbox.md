
<!--                   Flexbox               -->
<!-- 
 # Requiere de un elemento padre y al menos un elemento hijo
 # Al padre se le llama -> flex-cointainer
 # Al hijo se le llame -> flex-item
 si a un elemento se le pone display flex para los elementos de afuera es como si tuviera block
 si se le pone inline-flex para afuera es un inline.

main axis -> eje horizontal (izquierda a derecha)
cross axis > eje vertical (arriba abajo)

-->

<style>
	div {

	/* PROPIEDADES DEL PADRE FLEXIBLE */
		flex-direction: /* Para determinar en que axis esta el contenedor flexible */ 
			row | /* Por defecto, el axis principal es el main (horizontal) */
			row-reverse | /* ordena los elementos al reves en forma horizontal */
			column | /* Por defecto, el axis principal es el cross (vertical) */
			column-reverse | /* ordena los elementos al reves en forma vertical */ ;

		flex-wrap : /* Para determinar si saltan de linea los elementos*/ 
			nowrap : por defecto, no salta de línea
			wrap. Salta de línea
			wrap-reverse : salta pero al revés ;

		flex-flow : | /* agrupa a ambas propiedades (direction y wrap) */
			row-reverse wrap-reverse

		/* ALINEACION EJE PRINCIPAL */	
		justify-content : alinea el contenido a través del eje main (por defecto horizontal) 
			flex-start : valor por defecto | inicio del eje
			flex-end : fin del eje
			space-between : distribuye el espacio disponible entre los elementos
			space-around : distribuye el espacio alrededor de los elementos
			space-evenly : espacio entre adelante y los costados;
			center : centro
			margin auto : puedo hacer cosas increíbles;

		/* ALINEACION EJE SECUNDARIO */	
		align-items /* cuando haya solo 1 linea de contenido */
		align-content /* cuando son varias líneas */
			flex-start : por defecto,al inicio
			flex-end: final
			stretch:  tamaño total del cross axis
			baseline: se alinean por la base del texto
			center

	/* PROPIEDADES DE LOS HIJOS FLEXIBLES */

		order : numero natural | es para ordenar elementos según numero (main axis)
		align-self : (cross axis)
		 flex-start : por defecto,al inicio
		 flex-end: final
		 stretch:  tamaño total del cross axis
		 baseline: se alinean por la base del texto
		 center

		/*  cajas flexibles */ 
		flex-basis: main-size inicial
		flex-grow: factor de crecimiento 0 y 1 (1 es para que crezca en el espacio disponible)
		flex-shrink : factor de encogimiento 
		flex : grow shrink basis | auto
		White-space: nowrap , es una propiedad para los menú que se ajuste el texto automáticamente

	}

<style>




