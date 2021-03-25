// --------------------- Decoradores --------------------------
// habilitar. "experimentalDecorators": true, en tsconfig.json
const Entidad = (config:any) => {
    return function(target:any){
        target.clave = config.clave // agrega un atributo a la clase solo en tiempo de ejecucion
    }
}

const enumerable =(value: boolean) => {
    return function(target:any, propertyKey:string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value;
    }
}

@Entidad({
    clave:'CURSO'
})
class Curso7 {
    prueba:string
    constructor(private _id:number, private _nombre:string){
        this.prueba = ''
    }

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

    @enumerable(false) // no aparece como propiedad
    getPrueba(){
        return this.prueba;
    }
}

let ts = new Curso7(1,'ts')