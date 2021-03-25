// Este patrón nos permite tener una solo instancia de un tipo de objeto, porque no es necesario crear varias instancias nuevas cuando una solo instancia puede encargarse del mismo trabajo en toda la aplicación. Al solo tener una instancia, centralizamos la información, funcionalidad y mejoramos el rendimiento disminuyendo el uso de memoria.

let configSEO = {
    nombre: 'Pensemosweb',
    seo: {
      descripcion: {
        limiteCaracteres: 155,
        limitePalabras: 23
      },
      titulo: {
        limiteCaracteres: 70,
        limitePalabras: 9
      }
    }
};

// Un simple objeto de configuración es un singleton, pues en toda la app se va a hacer referencia al objeto configSEO y nunca se va a crear más nuevos objetos porque se puede extender esa configuración añadiendo más propiedades.