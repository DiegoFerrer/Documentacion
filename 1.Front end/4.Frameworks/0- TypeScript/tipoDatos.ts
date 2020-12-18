// -------------------------------------------Tipos de datos--------------------------------------------------------------
let Nombre: string = 'Diego'
let numeros: number = 2;
let arregloA: number[] = [1,2,3,4]
let arregloB: Array<string> = ['a','b','c']
let boolean: boolean = true

// Tipos especiales
let any: any = 'valor'; // para guardar cualquier tipo de datos
const mostrarContenido = (curso: string): void => {} // ejecuta una accion pero no retorna absolutamente nada
let nunca: never; // Tu funcion nunca va a retornar un valor valido
const retornaError = (error: string): never => {throw new Error('Error typescript')} // nunca retorna un valor,produce una accion
let Undefined: undefined = undefined; // ausencia de valor
let Null: null = null; // No existe
// tupla
let infoCurso: [string,number] = ['nameCurso',100]