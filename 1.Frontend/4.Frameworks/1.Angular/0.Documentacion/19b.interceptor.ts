//? es un servicio que permite capturar y procesador todas las peticiones http etc

/* 
en Angular, cuando hacemos peticiones a un API, normalmente nos piden una token de autorización, o una api key, o alguna otra cosa por las cabeceras, muchas personas lo que hacen es que en cada servicio o petición API, incluye la cabecera en los servicios, o, generan un servicio general para el API y ahí lo incluyen, sin embargo, esto se puede hacer más sencillo usando un HTTP Interceptor.

*/

//* Para crear nuestro interceptor, tenemos que generar un servicio usando el CLI de angular (puedes generar tu interceptor donde quieras en base a la estructura de tu proyecto):
//? ng g interceptor auth-interceptor

/*//todo-- Se debe inyectar el interceptor en el modulo principal en providers, app.module:
    providers:[
        {
            provide:HTTP_INTERCEPTORS,
            useClass: ProgressInterceptorService, //? referencia a la clase que tiene el interceptor
            multi:true
        }
    ] 
esto es para que el modulo principal sepa que la app tiene interceptores
*/

// Podemos observar que en nuestro provider utiliza la propiedad multi: true, esto permitirá agregar más interceptors si lo requerímos y no sobre escribir nuestro interceptor

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


//? pensaremos que usaremos localStorage para leer una token de autorización que enviaremos en cada petición al back-end para obtener datos:

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
if (!token) {
      return next.handle(req);
    }
const headers = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
      // otra forma de escribir esta linea de arriba -> :
    //   setHeaders: {
    //     authorization: `Bearer ${ token }`
    //   }
    });
return next.handle(headers);
  }
}

/* 
invocamos el método intercept que obtendrá la petición y la alterará (como su nombre lo dice “intercepta”), retornando un Observable . Una vez dentro, mandamos traer la token, si no existe, dejamos que la petición siga su camino, al final, no la podemos alterar ya que la token no existe. Sin embargo, si existe, lo siguiente a realizar es que la petición se modifique, asignando un header de tipo Authorization con el valor de Bearer + la token y entonces, ahora si, retornamos la nueva petición que será enviada.
*/

//! importar interceptor en modulo a usar
import { AuthInterceptor } from './interceptors/auth.interceptor'; 
providers:[
    {
        provide:HTTP_INTERCEPTORS,
        useClass: AuthInterceptor, //? referencia a la clase que tiene el interceptor
        multi:true
    }
] 
