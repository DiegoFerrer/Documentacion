// Alias | Aserciones de tipo
let cursoNuevo: string | number; // soporta ambos tipos de datos
let cursoNuevo2: (string | number)[] = ['hola', 1]; // soporta ambos tipos de datos
type Curso = string | number // crea un tipo como variable para usar
let cursoNuevo3:(Curso)[];
type Estudiante = {nombre: string, curso: string}
let estudiante = `{"nombre:"juan", "curso": "javascript}` // para hacer referencias a datos de backend
let data: Estudiante = <Estudiante>JSON.parse(estudiante)

// Enumerados | si yo conozco desde el primer momento los valores que voy a trabajar
enum Curso2 {
    Javascript,
    Typescript,
    Angular
}
let variableNueva: Curso2 = Curso2.Javascript; // Devuelve el indice
enum DiasSemanas {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES}
 
// Interfaces
interface Curso3 {
    nombre: string;
    identificador: number,
    propiedad3?: number // parametro opcional
}
let variable4: Curso3 = {
    nombre: 'angular',
    identificador: 1
}

// Herencia de interfaces
interface CursoAngular extends Curso3 { // va a tener las mismas propiedades de Curso3 y ademas la que les asignemos
    costo: number;
}