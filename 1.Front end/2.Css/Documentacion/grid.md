
<!--                   Grid               -->

<!-- Se necesita un elemento padre, y elementos hijo al padre :  -->
<style> 	
	div {
		display: grid;  || ni bien se le pone esta propiedad se genera un contexto
		/* definir columnas y filas  */
		grid-template-columns:200px 300px 150px (3 columnas serian) 
		grid-template-rows: 100px 300px 1fr (3 filas serian)  
			repeat(numero de filas/columnas, fit-content[que se adapte al contenido] / auto / fr/ px)
			repeat(4, minmax(1em, 4em) esto es para indicar el minimo y máximo 
		Para darle nombre a las líneas :
		grid-template-columns: [name line] 200px [xxx] 1fr  -> las líneas se nombran entre corchetes
		y después en el hijo se pone grid-column: y en ves de tamaño se pone name / name. 
	}
 	
	div {
		grid-auto-flow: 
			row / column  dense (cuando hay huecos los llene es dense) |esto es el orden del grid
		grid-auto-columns/rows | tamaño automatico para cuando se egregan líneas sin estar declaradas y las 					declaradas tengan ese minimo en auto
		grid-gap : 10px | separación entre celdas
		también están :
		grid-row-gap | grid-column-gap 

		grid-template-areas: “” “” “” | cada comilla es un row; -> nombrar áreas para luego acomodar
		elementos con grid-area: name declado en comillas

		grid-template-areas: ‘header header header’  para que ocupe 3 columnas por ejemplo 
                             ‘sidebar main main’ 	 para que sidebar ocupe una columa y main 2 columnas
                             ‘footer .’ 			 el punto es para declarar un área libre

        /* esto según cauntas filas se haya declarado en el template grid
        según la estructura declarada en el template área se alienean los elementos por ejemplo header esa primero y footer ultimo pero si pones al revés cambiaria */ 

        /* COMO FLEXBOOX CUENTA CON LAS SIGUIENTES PROPIEDADES */ 
        justify-items: por default esta en strecth | start | center | end
        align-items: por default esta en strecth| start | center | end
        justify-content: mismas propiedades que flexbox | space evenly (nueva propiedad para flexbox también)
        align-content: mismas propiedades que flexbox | space evenly (con los otros space, los espacios externso eran mas desgalados ,pero con esta propiedad todos los spacios son iguales)
	}

	/* Propiedades grid items */ 
	div {
		grid-row-start: números de líneas inicial
		grid-row-end: números de líneas final
		grid-column-start: números de líneas inicial
		grid-column-end números de líneas final
		shortham | grid-column/row : 2 / 4 (inicial / final)    2 / span 2 (ocupame 2 lineas)
		grid-area: 
			row-start / column-start
			row-end / column-end; 
		grid-area: 1 / 1 / span 2 / 4
		grid-area: nombre en template
		justify-self: | para row
			center
			strech
			end; 
		align-self: para columns
			center
			strech
			end  
	}
	/* Grid-Cross browser */ 
	@supports () {} -> es una condicional de css para preguntar si soporta una propiedad
	
	@ supports(grid-template-area: “header”) {
	    // estilos
	}
	


<style>

