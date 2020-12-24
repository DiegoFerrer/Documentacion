//? es un servicio que permite capturar y procesador todas las peticiones http etc

/*//TODO, Se debe inyectar el interceptor en el modulo principal en providers, app.module:
    providers:[
        {
            provide:HTTP_INTERCEPTORS,
            useClass: ProgressInterceptorService, //? referencia a la clase que tiene el interceptor
            multi:true
        }
    ] 
esto es para que el modulo principal sepa que la app tiene interceptores
*/

export class ProgressInterceptorService implements Httpinterceptor {

    //* importamos el servicio del indicador de progreso para interceptar las comunicaciones entre el componente de progreso y el servicio
    constructor(private: service:ProgressIndicadorService){}

    //TODO, se debe autoImportar todos los http siguiente
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // esta funcion es la que se ejecuta en cada peticion
        return next.handle(req) // gestiona todos los request y retorna un observable
            .pipe(
                tap(value => this.service.show()), // captura la peticion cuando esta activa e invoca a la funcion show del servicio
                delay(1000), // esto es porque en local no hay delay y lo simulamos, pero en servidor se debe quitar
                finalize(() => this.service.hide()) // captura el momento exacto en que termina de ejecutarse la peticion y ejecuta hide
            );
    }

    
}
