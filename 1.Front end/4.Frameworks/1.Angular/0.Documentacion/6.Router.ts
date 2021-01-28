
/* 
	* Permite la naveacion de una vista a otra
	* no se debe usar href, se debe usar routerLink ="ruta|" para que tenga un elemento activo , routerLinkActive, en todos los elementos
	* router outlet
*/

 // en app-routing.module.ts
 // import {Routes, RouterModule} from '@angular/router' ;
//! ##########################################################################################################################

{ 
	path : '/'
	redirecTo: 'path'
	pathMatch: 'full'
}
{
	path : '/photos'
	componet: photoComponent
}

//// ##########################################################################################################################

//?													LAZY LOADING
//* es un patrón de diseño, que consiste en retrasar la carga o inicialización de un objeto hasta el mismo momento de su utilización.

//* técnica que sirve para la mejora del rendimiento y velocidad de las aplicaciones Angular


// Podríamos ir asignando rutas a componentes, pero no lo haremos. ¿Por qué? Pues por una cuestión de pesos y velocidad. Tal como se ve en el código, para poder asignar un componente a una ruta antes tenemos que haberlo importado. Y eso significa que parará a formar parte del código que se transpile, empaquete y envíe al navegador.

// Es decir, el sufrido usuario se va a descargar la definición de los componentes antes de visitarlos. Es más, se descargará componentes de rutas que quizá nunca visite. A esta técnica se la conoce como eager loading y, en general y hablando así a la bruto, debemos evitarla en favor de otra conocida como lazy loading.

// Para implementarla se necesitan un par de cooperantes. En particular y sobre todo el empaquetador Webpack.

// El objetivo es diferir la descarga de las rutas no visitadas y para ello querremos empaquetar cada ruta en un bundle. Esto requiere al menos un módulo por ruta y adoptar un convenio especial para que webpack inicie nuevos empaquetados en múltiples puntos.


//* Por complejo que suene en la práctica es muy sencillo. Basta con usar el comando adecuado del CLI. Por ejemplo para el caso del Acerca de emplearíamos una instrucción como esta:

//? ng g m about --route=about -m app-routing.module.ts
// No es más que la generación de un nuevo módulo pero con el flag --route= que le indica al CLI que debe tratarlo como una nueva ruta. Este súper comando genera dos módulos, un componente y además los registra automáticamente. Veamos el resultado:

{
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  },

  //? otra forma: https://mugan86.medium.com/trabajando-con-lazy-loading-en-angular-8-e1611ce2c46f
	

//   Lo que dice es que cuando se active la ruta about entonces se le transfiera el control a otro módulo mediante una instrucción asíncrona. De esta forma ase consiguen dos cosas: por un lado al no usar ningún componente explícito no hay que importarlo; por otro lado la descarga del módulo que resuelva el problema se ejecutará en segundo plano y sólo si el usuario visita la ruta.

// Claro que sólo hemos visto la mitad de la película. La instrucción loadChildren delega el enrutado en otro módulo; el AboutModule que fue creado por el cli. Dicho módulo depende a su vez de otro de enrutamiento local, el AboutRoutingModule.
//// ##########################################################################################################################

//?												RUTAS ANIDADAS

// Hay muchas situaciones que por cuestiones de usabilidad anidamos navegaciones. Por ejemplo una tienda online, te permite escoger categorías, y después vistas distintas de sus productos como listados o fichas. En las aplicaciones de gestión es frecuente encontrarse con estructuras tipo tab o menús de actuación parciales.

// Estas situaciones se resuelven la tecnología denominada nested routes y requiere del conocimiento de una nueva propiedad de las rutas

//* 3.1 Children
// Antes de nada supongamos que en la página about queremos mostrar dos categorías de información. Por un lado enlaces de interés sobre esta aplicación y por otro una información básica sobre la misma.

// Crearíamos por tanto un par de componentes como estos.
	// ng g c about/about/links
	// ng g c about/about/info

//TODO, Pero, en lugar de asignarles ya un camino específico a cada uno, lo que haremos será incrustarlos como hijos del componente AboutComponent. Para ello escribimos algo así en about-routing.module.ts
	{
		path: '',
		component: AboutComponent,
		children: [
		{
			path: 'links',
			component: LinksComponent
		},
		{
			path: 'info',
			component: InfoComponent
		}
		]
	}

// Esto es sólo el primer paso.

//* 3.2 RouterOutlet anidado
// Para que los hijos acaben apareciendo dónde deben, hay que usar un segundo <router-outlet>. Esta vez dentro de la vista del componente padre. En AboutComponent:

<h3>About us</h3>
<header>
  <p>
    <a routerLink="links"
       class="button"> Tutorial Links </ab-home>
  </p>
  <p>
    <a routerLink="info"
       class="button"> More Info </a>
  </p>
</header>
<router-outlet></router-outlet>

//! Ahora este componente actúa como una micro aplicación; con su menú y su espacio de carga dinámica.
//// ##########################################################################################################################


//?											 PARAMETROS EN LAS RUTAS

// No se trata solamente de crear enlaces que envían parámetros, sino aprender a recibir esos parámetros. Además, cuando los parámetros cambian, saber detectar esos cambios de manera asíncrona. Vayamos poco a poco para que sea fácil de entender.

//* Declarar rutas que van a recibir parametros

{ path: 'camino/:parametro', component: ParametroComponent }

// podemos indicar 1 o varios parametros para esta ruta de la siguiente forma

{ path: 'coches/:marca/:modelo', component: CochesComponent }


//* Recibir los valores de los parametros 

// ara recibir los valores de los parámetros en el componente al que nos dirige la ruta tenemos que usar un objeto del sistema de routing llamado "ActivatedRoute". Este objeto nos ofrece diversos detalles sobre la ruta actual, entre ellos los parámetros que contiene.

//? componente que vas a utilizar los datos
import { ActivatedRoute, Params } from '@angular/router';
constructor(private rutaActiva: ActivatedRoute) { }

// Recibir valores de parámetros con el snapshot

ngOnInit(){
	this.rutaActiva.snapshop.params

	// El snapshot te da los parámetros del componente en el instante que los consultes. El objeto parmas contendrá todas las propiedades según los parámetros recibidos. Quiere decir que, el modelo lo recuperaremos con "this.rutaActiva.snapshot.params.modelo" y la marca con "this.rutaActiva.snapshot.params.marca".
}




//! ¿Por qué esta aproximación de la recepción de parámetros en Angular podría no funcionar? El caso es que nuestro componente podría no ser consciente de que los parámetros han cambiado en un momento dado.

// Tal como hemos dejado el ejemplo hasta el momento, si has ido programando en tu propio proyecto con estas indicaciones, podrás encontrar el problema, si cambias de una ruta a otra dentro del mismo componente. La primera te recoge bien los parámetros, pero si ya estás en "CochesComponent" y pulsas un enlace a la misma ruta pero con valores de parámetros distintos, observarás que no se refrescan los valores en el template

// El problema es que la inicialización de los parámetros la hemos colocado en el ngOnInit() y si el componente ya pasó su etapa de inicialización, no se vuelven a recibir los parámetros con el snapshot. Por eso, si cambian los parámetros estando ya en el componente "CochesComponent", no se reciben los nuevos valores.

//###################################################################################################################################################################

//* Recibir valores de parámetros con un observable
// Los observables de Angular y RxJS nos vienen a solucionar esta situación. Como sabes, los observables nos permiten suscribirnos a eventos que se recibirán de manera asíncrona, mediante programación reactiva y manteniendo un alto rendimiento.

//? Básicamente, en el objeto de tipo AtivatedRoute tenemos una propiedad llamada "params" que es un observable y que nos sirve para suscribirnos a cambios en los parámetros enviados al componente.

this.rutaActiva.params.suscribe(
	(params: Params) => {
		this.propiedad1 = params.propiedad1
	}
)

//! si te sales del componente para ir a otras rutas se debería cancelar la suscripción en el método ngOnDestroy(). Sin embargo, esto es algo que Angular ya realiza por ti mismo en el caso de las suscripciones a cambios en parámetros de las rutas, por lo que para este ejemplo en concreto no te necesitas preocupar.

//// ##########################################################################################################################

//?											 REDIRECCIONES

// si queremos hacer una redireccion desde un componente
class componente {
	
	metodo(){
		this.router.navigate(['/ruta]')
	}

	constructor(private router: Router) {		
	}
}


// Hay situaciones en las que dada una ruta, queremos enviar al usuario a otra página. A veces por una simple decisión de renombrado de rutas. Otras quizá respondiendo a problemas o acciones inesperadas del usuario.

// Por ejemplo, vamos ver un tratamiento genérico del caso not found. Para empezar crearemos una ruta específica para indicarle al usuario que la ruta que buscaba no existe.

//* ng g m not-found --route=not-found -m app-routing.module.ts
// Ya sabemos lo que ocurre. Un nuevo módulo y una ruta diferida a nivel raíz not-found.

{
  path: 'not-found',
  loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
},

//* Que localmente se asigna al componente NotFoundComponent.
{
  path: '',
  component: NotFoundComponent,
},

//* Cuando entren en cualquier ruta desconocida. Para eso usamos un nuevo comando de la configuración de rutas, el redirectTo. Y lo asignamos a todas aquellas rutas desconocidas usando un el comodín **
//? se debe declarar en el modulo de rutas PRINCIPAL

{
  path: '**',
  redirectTo: 'not-found'
}

//? Esta entrada especial debe situarse al final del array de las rutas conocidas. Angular evalúa la ruta actual contra todas las disponibles de arriba a abajo. La primer que resuelva el match gana.





//// ##########################################################################################################################
