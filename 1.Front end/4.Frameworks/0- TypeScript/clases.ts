// ----------------------------- POO -----------------------------------------

// Encapsulamiento
class Curso5 {
    constructor(private _id: number, public _nombre:string, private readonly _edad:string){ // variable solo lectura para que no pueda ser modificada
        this._id = _id; // se usa _atributo 
        this._nombre = _nombre;
        this._edad = '24'
    }
    // GET y SET (para acceder y modificar los elementos privados)
    get id(){
        // Permite obtener el estado o valor de "id"
        return this._id
    }
    set id(id:number){
        // Permite cambiar el estado o valor de "id"
        this._id = id;
    }
    
    get edad(){
        return this._edad
    }
}
// Clases abstractas | una clase demasiado general como para ser definida. No puedo crear una instancia de esa clase con new Escuela

abstract class Escuela { // superClase
    // protected se usa para terminos intermedios, ni tan privado ni tan publico. es para que otra clase herede esto
    protected cursos: Curso5[] = []; 
    constructor(protected _id: number, protected _nombre:string){} // se puede definir atributos y parametro del constructor en la misma linea usando public/private

    get id(){
        return this._id
    }

    set id(id: number){
        this._id = id;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre:string){
        this._nombre = nombre
    }
    agregarCurso(curso: Curso5): void{
        this.cursos.push(curso)
    }
}
// ------------------- Herencia de clases -----------------
class EscuelaDigital extends Escuela {
    constructor(id:number, nombre: string, private _paginaWeb:string){
        super(id, nombre) // reusar el constructor de la superclase
    }

    get paginaWeb(){
        return this._paginaWeb;
    }

    set paginaWeb(paginaWeb:string){
        this._paginaWeb = paginaWeb;
    }

}

const escuela = new EscuelaDigital(1,'name','google.com')
let cursoJS = new Curso5(1, 'Javascript','1995')
escuela.agregarCurso(cursoJS)

cursoJS._nombre = 'nuevoValor' // esto es porque en la clase la variable esta public
cursoJS._id = 'valor' // no se puede modificar porque es privado de la clase
cursoJS.id = 2 // Asignacion: SET
console.log(cursoJS.id) // leyendo: GET

// Atributos y metodos estaticos
enum MisCursos{
    Javascript,
    Typescript,
    angular
}

class Curso6 {
    public static cursosDisponibles: MisCursos[] = [MisCursos.Javascript, MisCursos.Typescript];
}