/* 

? LIBRERIAS
Usar librerias con require etc, que no esten en npm:
https://www.youtube.com/watch?v=kYsSJ2EpmWE&list=PLHgpVrCyLWApLDoezmOfrUXb-IMoDs5Ls&index=8&ab_channel=MoldeoInteractive

//################################################################################################################################

? INTERACTIVIDAD
Renderer, permite trabajas con el elemento en el DOM. Como agregarle clases, texto,eventos.etc

*/
import {Renderer2} from '@angular/core'

export class prueba implements onInit {

viewChild()
documento: ElementRef

    constructor(private renderer:Renderer2){}

    ngOnInit(){
        // listen recibe 3 argumentos, elemento,tipo evento y callback | si pones 'document' en vez de un elemento. Accedes a todo el dom
        this.renderer.listen(elemento,'click', evento =>{
            evento.preventDefault()
            console.log(e.clientX); // posicion x mouse
            console.log(e.clientY); // posicion y mouse
        }) // Ejecutar un listener (como el addEventListener)

        this.renderer.addClass // Ejecutar un listener (como el addEventListener)
    }
}
//################################################################################################################################
/* 
? ANGULAR UNIVERSAL

https://www.youtube.com/watch?v=OLLQr59tl30&ab_channel=PlatziLab

Es un generador de proyecto en angular, como el CLI
Angular Universal es la tecnología que te permite ejecutar tu aplicación Angular desde el servidor. El Server Side Rendering (SSR) te puede interesar por cuestiones de SEO, 

¿Qué son las aplicaciones isomórficas?
La gracia de usar SSR con Angular (igual que con otras librerías front como React), es que luego puedas «reengancharte» a esa página desde el cliente. De este modo, consigues lo mejor de los dos mundos:
    * Una carga inicial rápida gracias al SSR
    * Una navegación más dinámica gracias a la ejecución en local

Con el angular CLI se crea la web pero a la hora de inspeccionar el codigo en consola, no se ve el contenido. Si no que sale app root y nada mas.
Esto para lo que es el SEO, Bots de google,etc. Es muy malo ya que no encuentra ningun tipo de contenido.

Cuando usar angular CLI o Universal?
    * CLI: Cuando solo nos importa la funcionalidad de la web/app y no tanto el SEO y demas
    * UNIVERSAL: Para cuando si nos importa el SEO Y que la web se haga conocida

*/
//################################################################################################################################
/* 
? OBSERVABLES
Vendria a ser como un callback a una peticion.

//################################################################################################################################
? ANGULAR ELEMENTS
    ng add @angular/elements

    Nos permite generar componentes, compilarlos en web componentes o custom componentes.
    Es decir, sin necesidad de usar angular node, vamos a tener un elemento personalizado,con atributos personalizados,etc.
*/

// componente
import {viewEncapsulation,input} from '@angular/core' // esto hace que el css html y component se "fusionen" en 1 solo archivo

@CompositionEvent({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['.app.component.css'],
    encapsulation: viewEncapsulation.Native
})
export class AppComponent {
    @Input() title = 'app'
}

// modulo
import {Injector} from '@angular/core'
import {createCustomElement} from '@angular/elements'

entryComponents: [appComponent]

export class AppModule {
    constructor(private injector: Injector){
        const element = createCustomElement(AppComponent,{injector})
        customElements.define('name-Tag', element)
    }

    ngDoBoostrap(){}
}

// npm i --save-dev fs-extra concat 

////################################################################################################################################
//?                                                     BUENAS PRACTICAS

/* 
?   Estructura de directorio
3 tipos de modulos
    * Core
        Todos los servicios y componentes que se comporten de manera global o se utilizen por una unica vez
    * Shared
        Recursos que se usan a traves de la app
            * material
            * pipe  
            * etc

? Package comandos
    guardar un script:
    "build:prod": "ng build --prod --builder-optimizer"

? commits
    * feat: feat y mensaje, cuando es una rama/tarea nueva
    * fix: fix mensaje, para cuando estas arreglando bugs

? actualizar angular
update.angular.io

ng update

////################################################################################################################################
?                                                     RUTAS

routerMoudle.forRoot , es para rutas principales

* en rutas hijas crear su propio router outlet
Esto nos sirve para separar un layout compartido, por ejemplo de la pagina de login que no lo va a tener

! LA MEJOR FORMA
  es  crear un routing module para cada pages y ahi declarar sus rutas hijas. 
    * crear archivo ejem: auth.routing.ts
  ? utilizando el routerMoudle.forChild y se debe tambien exportar

  * se debe importar el modulo dentro del app module en  
  imports: [
      RouterModule.forRoot(routes),
      nameModule
    ],

todo, Una vez creado el archivo de ruta especifico, si quiero rutas hijas del estilo /ruta/rutaHija,se deberia declarar de la siguiente forma:
  {
    path: 'ruta',
    component:  nameComponent,
    children: [
         {
            path: '', | corresponde a localhost/dashboard
            component:  nameComponent,
        },
        {
            path: 'rutaHija',
            component:  nameComponent,
        },
    ]
  },

////################################################################################################################################
?                                                     MODULOS

los componentes,modulos,etc que se declaren en por ejemplo, shared module, deben tambien ser exportados.




////################################################################################################################################
?                                                     RELEASE GITHUB

git tag -a v1.0.0 -m "Primera version lista"
git push --tags
////################################################################################################################################
?                                                       SERVICIOS

si los servicios vienen con el provideIn: (desde angular 5 en adelante viene)
! ya no hace falta importarlos en ningun modulo

* los servicios conservan el estado, por eso al injectar un servicio conserva el ultimo valor de las propiedades


////################################################################################################################################
?                                           OBSERVABLES, PROMESAS Y RXJS

todo, Observables y promesas.
    Nos sirven para trabajar con procesos asincronos, nos sirve para trabajar con cualquier situacion que necesitemos esperar una 
    respuesta que no viene de una forma instantanea

* Promesas
    # Trabajan con un unico flujo de datos
    # Se usan con una unica data asincrona de respuesta
    # No es muy simple de cancelar

    checkLogged(): Promise<boolean> , este metodo devuelve una promesa, que al resolverla te da un boolean

* Observable
    # Trabajan con un flujo continuo de datos(pueden escuchar una gran cantidad de respuestas)
    # Al fallar pueden ejecutar comandos y reintentar continuar con el observer
    # Se pueden encadenar operadores adicionales como el map,forEach,reduec,filter,etc
    # existen otros operados potentes como el retry() y replay()
    # pueden ser creados desde otras fuentes,como los eventos
    # son funciones que podemos suscribirnos en multiples lugares


    * RxJs
        todos los operados se ejecutan de forma secuencial, si primero uso el map y despues filter, a filter le llegaria el valor modificado que hizo map

        ? observable.pipe(transforma la informacion, entra de una forma y sale de otra) | si quiero usar el retry por ejemplo, lo tengo que hacer mediante pipe
        .pipe(
            ? map(valor => { | map (transforma la salida del observable)
                return valor + 1
            })
        )
        .pipe(
        ? take(4) | cuantas emisiones del observable necesita y automaticamente lo completa
        )
        .pipe(
            ? filter(valor => valor % 2 == 0 ? true : false ) 
        )


    * Unsuscribe 
        Cuando voy a destruir el componente, es importante llamar al unsuscribe

        ? se recomienda hacerlo en el ngOnDestroy(){
            metodoQueRetornaObservable.unsuscribe()
        }

    * Breadcrumbs (parametros rutas)
     { path: '', component:  nameComponent,data: {titulo:'titulo pagina',otroParametro: valor }}
      ? componente 
      constructor(private router: Router){
          this.router.events
            .pipe(
                filter(event => event instanceof ActivationEnd)
            )
            .suscribe(event => cosole.log)

          })
      }


*/

/* 
////################################################################################################################################
?                                           REACTIVE FORMS
*/

public formSubmitted = false

// creando los valores por defecto de los campos
registerForm = this.fb.group({
    nombre:['',[Validators]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators]]
},{
    validators: this.passwordsIguales('password','password2')
})


constructor(private fb: FormBuilder){}

crearUsuario(){
    this.formSubmitted = true
    this.registerForm.value
}

campoNoValido(campo:string):boolean{
    if(this.registerForm.get(campo).invalid && this.formSubmitted){
        return true
    } else return false
}

// debe ir en el html y se activa cuando es true
passwordsNoValidas(){
    const pass1 this.registerForm.get(password).value
    const pass2 this.registerForm.get(passwor2).value

    // si las contraseñas son distintas y ademas se envio el form
    if(pass1 !== pass2 && this.formSubmitted) {
        return true
    } else return false
}

passwordsIguales(pass1:string, pass2:string){
    return (formGroup: FormGroup) => {
        const pass1Control = formGroup.controls.get(pass1)
        const pass2Control = formGroup.controls.get(pass2)
        if(pass1Control.value === pass2Control.value){
            pass2Control.setErros(null)
        } else {
            pass2Control.setErrors(noEsIgual=true)
        }
    }
}

//--------------------------- HTML --------------------------------
<form (ngSubmit)="crearUsuario()"
    <input formControlName="nombre" campoNoValido(nombre)>


/* 
////################################################################################################################################
?                                           - GOOGLE SignIn FRONT END

https://developers.google.com/identity/sign-in/web/build-button
agregar dominio en credencials: localhost:4200
*/
// en index html poner: Remplazar el client it por el google id
<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
<script src="https://apis.google.com/js/platform.js"></script>

//TODO, en HTML COMPONENT:
<div id="my-signin2"></div>


//todo,  en el component login:

// arriba del decorador @component:
declare const gapi:any
@component({})
export class LoginComponent implements onInit{
    auth2: any
    constructor(private ngZone:ngZone){}
    onInit(){
        this.renderButton()
    }    
    
    renderButton() {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
        });

        this.startApp()
    }
    
    async startApp() {
        await this.usuarioService.googleInit()
        this.auth2 = this.usuarioService.auth2

        this.attachSignin(document.getElementById('my-signing2')) // id boton
    };

    
    attachSignin(element) {
        this.auth2.attachClickHandler(element, {},
            (googleUser) => {
            const id_token = googleUser.getAuthResponse().id_token
            this.usuarioService.loginGoogle(id_token).suscribe(response =>{
                this.ngZone.run(()=>{
                    this.router.navigate('/home')
                })
            })
            }, (error) => {
            alert(JSON.stringify(error, undefined, 2));
            });
    }

    // este metodo va donde este el logout,nada que ver al login
    logout(){
        localStorage.removeItem('token')
        this.auth2.signOut().then(() => {
            this.ngZone.run(()=>{
                this.router.navigate('/login')
            })
        });
    }
}
// -------------------------------------------------
//TODO, SERVICIO AUTH: 
declare const gapi:any
public auth2:any

constructor(){this.googleInit()}

googleInit(){
    return new Promise(resolve =>{
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
              client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // cliente id
              cookiepolicy: 'single_host_origin',
            });
        });

        resolve()
    })
}

//---------------------------------------------------------------------------
//TODO LOGOUT GOOGLE

/* 
////################################################################################################################################
?                                              GUARDS
si un component tiene rutas hijas, con poner el guard al padre ya lo activa en todas

////################################################################################################################################
?                                              



*/