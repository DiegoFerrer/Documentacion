/* 
	Navegadores modernos admiten 2 APIs para las solicitudes htpp
		*XMLHtppRequest
		*fetch API

	Angular provee un cliente HttpClient, que ofrece una API HTTP simplificado basado en la interfaz XMLHttpRequest
*/

// Se debe importar AL MODULO principal lo siguiente y agregarlo a imports @NgModule
import {HttpClientModule} from '@angular/common/http'


// ????????????????????? servicio

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {catchError,throwError} from 'rxjs/operators'

constructor(private http:HttpClient)

getDatos(): Observable<tipo> {
	return this.http.get<tipo>('url o archivoJson')
	.pipe(
		catchError(this.manejarError)
	)
}

manejarError(error:HttpErrorResponse){
	if(error.error instanceof ErrorEvent){
		// Error del cliente
		console.log('error del cliente', error.error.message)
	} else{
		// Error de servidor
		console.log('status', error.status)
	}
	return throwError('hubo un problema') // capturar y relanzar.
}

// Para manejar errores se deferia definir en el servicio una funcion para manejarlo
private manejarError(error: HttpErrorResponse){
	if (error.error instanceof ErrorEvent){ // error del lado del cliente
		console.error('Ocurrio un error:', error.error.message)
	} else { // error del lado del servidor
		console.error(error.status, error.error)
	}
	return throwError( // retorna el error como observable
		'Error inesperado')

}

// -----------------------------------------------

// componenente | primer paso inyecta el servicio y luego utiliza el metodo
ngOnInit(){
	this.Servicio.getDatos()
	.suscribe( (data:tipo) => this.variable = data)
	.pipe(
		catchError(error =>{
			this.mensajeError = error
			// return of ([]); // capturar y remplazar
			return EMPTY // capturar y remplazar, sin remplazar nada
		})
	)
}

mensajeError:string;


