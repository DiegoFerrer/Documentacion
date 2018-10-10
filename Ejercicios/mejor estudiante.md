
<!--            Mejor estudiante                   -->

<script>
	let mejorEstudiante = estudiantes
				.reduce((a,b)=> {
					if( a.calificacion > b.calificacion) {
						return {
							nombre: a.nombre
						}
					} else {
						return {
							nombre: b.nombre
						}
					}
				}) 
</script>