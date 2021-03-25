
//? ng g guard name
//? Para que funcione, tenemos que importar el guard en el app.module.ts, en la sección providers
//? Se debe importar y declarar en el archivo de rutas
  /* { path: 'ruta', component: nameComponent,  canActivate: [nameGuard] }, */


// ----------------------------------------------------------------------------------------------

/*//*              Dentro de los guards hay 4 tipos principales:

//? CanActivate: 
      Mira si el usuario puede acceder a una página determinada.

//? CanActivateChild: 
      Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.
      Si lo que queremos es que todas las páginas hijas de una ruta estén protegidas lo que tenemos que hacer es cambiar la un par de cosas del guard. EL guard ahora no implementará de CanActivate sino de CanActivateChild, y el método de dentro de la clase, como es obvio, también cambiará a CanActivateChild(). El resto de cosas del guard se mantienen.
      Para usar este guard para todos los hijos hacemos lo mismo que antes (añadiendo el guard en el componente padre), añadiéndolo a la ruta, pero esta vez el campo de la ruta se llamará canActivateChild.

//? CanDeactivate: 
      Mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de comfirmación, si el usuario tiene cambios sin guardar.

//* CanLoad: 
      Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.
      Es decir, cuando creamos los modulos de carga asyncrona, al utilziar CanLoad, primero pregunta si esta autorizado a entrar
      antes de cargar el modulo.

*/


//TODO, Los guards se implementan para ser inyectandos por lo tanto tenemos que usar la etiqueta @Inyectable, como si fuera un servicio
//* Los guards devuelven true o false para permitir el paso o no de un usuario a la ruta.
//! También pueden devolver un Observale o una Promise si el guard no puede responser inmediatamente y tiene que esperar.


// ############################################################################################################

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {} 

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this.checkLogged()
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogged()
 }
  
  checkLogged(){
    // llamo al servicio que me dice si esta logeado o no
    let logeado = this.loggedService.isLogged()
    .pipe(
      map(logeado => {
        if (logeado) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
    );
  }


}

// ############################################################################################################