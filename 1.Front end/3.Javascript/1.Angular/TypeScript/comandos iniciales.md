
<!-- 
	$ npm install -g typescript | Instalar typescript 
	$ tsc --init | te crea un archivo tsconfig.json 

	// compilar archivos desde la terminal 
	// En tsconfig.json agregar :
    "include": [
      "./src/**/*.ts"
    ]
  	// Esto quiere decir que mire todos los archivos ts
	$ tsc --watch // para que observe el compilar si hay cambios
	/* en las opciones del compilador, en outdir poner la carpeta donde
	van a ir los archivos js compilados */

-->
<script>
	// Sintaxis de variables 
	let nombreVarible:tipoDeDato = valor;

	let Nombre: string = 'Diego'
	let arregloA: number[] = [1,2,3,4]
	let arregloB: Array<string> = ['a','b'.'c']
	let variable: any = valor; // para guardar cualquier tipo de datos
	let variable: boolean = true

	// Modelado de datos

	enum DiaCurso {MARTES, VIERNES};
	enum DiasSemanas {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES}

	let primerDia: DiaCurso;

	// private, public, protected

	contructor (private name: tipo)
	// para no tener que declarar y asignar una variable  2 veces
</script>