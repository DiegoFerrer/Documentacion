
/* 
	Permite la naveacion de una vista a otra

	no se debe usar href, se debe usar routerLink ="ruta|"
	para que tenga un elemento activo , routerLinkActive, en todos los elementos
	

	router outlet


*/

 // en app-routing.module.ts
 // import {Routes, RouterModule} from '@angular/router' ;

{ 
	path : '/'
	redirecTo: 'path'
	pathMatch: 'full'
}
{
	path : '/photos'
	componet: photoComponent
}
// -------------

// si queremos hacer una redireccion desde un componente
// router module:
{
	path : '/:id' // valor dinamico, significa que vamos a obtener un valor id
	componet: photoComponent
}
// clase componente:
	// import {Router} from '@angular/router' ;
	constructor(private router: Router){}

	metodo(){
		this.router.navigate([`/ruta/${curso.id}`])
	}