
<!--              Programacion Imperativa                   -->

<script>
	/*


	•	Indica el como: describe un problema en términos de instrucciones y 		condiciones para llegar a un resultado. Por ejemplo: necesito esta 			condicional, estos valores, etc.
	•	Modifica el estado de un programa al permitir la mutación de valores
	•	Usa procedimientos y rutinas como mecanismos de control ,que pueden 		generar efectos secundarios
	•	Existen estructuras cíclicas de programación para iterar, como while, for 	  y loop
	•	Asignación destructivas de variables (una variable puede ser reasignadas 	 tantas veces se quiera)
	•	no hay garantías que las variables pasen con transparencia de un método a 	  otro
	•	Código verboso y con muchas líneas
 
	*/

	//  Codigo imperativo 

	const number = [1,2,3,4,5]

	function cuadrado (numbers) {
		let array = []
		for (let i = 0; i < numbers.length; i++){
			array.push(numbers[i] * numbers[i])
		}
	}
</script>
