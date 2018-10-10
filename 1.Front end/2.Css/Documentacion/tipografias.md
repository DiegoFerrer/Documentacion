
<!-- Tipografias -->

Control de TIPOGRAFIÍAS 
Concepto : Es recomendable tener 6 tamaños de fuente
Se puede definir con clases o mixins en sass

Se recomienda hacer escalas entre las proporciones de tamaño de fuente 

fuente1:
fuente2:
fuente3:
fuente4:
fuente5:
fuente6:
Ver links en fuentes

luego hacer en mixins mixin t1 {Font-size : variable fuente correspondiente más los media query} 



<style >

	h1{

		line-height | ritmo vertical, tamaño del renglon
		word-spacing: | espaciado entre palabras 
			px;
		letter-spacing:  | espaciado entre letras 
			normal
			inherit
			px;
		writing-mode: | define en que sentido vertical y horizontal corre el texto
			horizontal-tb | de izquierda a derecha y de arriba a abajo;
			vertical-rl | vertical de arriba hacia abajo y horizontal de derecha a izquierda;
			vertical-lr | verticalmente de arriba hacia abajo y de izquierda a derecha;

		text-orientation: 
				upright; | para mantener las letras verticales;
				mixed |
				sideways-right |
				sideways-left |
				use-glyph-orientation |
		text-align: 
			left:;
			right:;
			center:
			justify:;
		text-decoration: 
			underline;
			line-through
		text-indent: | sangria
			px
		text-transform
			uppercase; | mayuscula
			lowercase; | minuscula
			capitalize;| primera letra mayuscula

	}
</style>


