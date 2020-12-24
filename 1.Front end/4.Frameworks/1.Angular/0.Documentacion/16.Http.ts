/* 
	Navegadores modernos admiten 2 APIs para las solicitudes htpp
		*XMLHtppRequest
		*fetch API

	Angular provee un cliente HttpClient, que ofrece una API HTTP simplificado basado en la interfaz XMLHttpRequest
*/

// Se debe importar AL MODULO principal lo siguiente y agregarlo a imports @NgModule
import {HttpClientModule} from '@angular/common/http'


//?------------- servicio

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {catchError,throwError} from 'rxjs/operators'

export class nameService {
	constructor(private http:HttpClient){}

	getDatos(): Observable<tipo> {
		return this.http.get<tipo>('url o archivoJson')
		.pipe(
			catchError(this.manejarError)
		)
	}
	
	// Funcion para procesar errores de peticiones |se usa con la fn pipe para llamarla
	private manejarError(error:HttpErrorResponse){
		if(error.error instanceof ErrorEvent){
			// Error del cliente
			console.log('error del cliente', error.error.message)
		} else{
			// Error de servidor
			console.log('status', error.status)
		}
		return throwError('hubo un problema') // capturar y relanzar.
	}
	
}

//! ------- componenente | primer paso inyecta el servicio y luego utiliza el metodo
export class nameComponent {
	ngOnInit(){
		this.Servicio.getDatos()
		.pipe(
			catchError(error => {
				//* puedo poner algo en el template aca
				// return of ([]); // capturar y remplazar
				return EMPTY; // capturar y remplazar, sin remplazar nada
			})
		)
		.suscribe((data:tipo) => this.variable = data)		
	}	
}


