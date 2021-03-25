/*
                ¿Que es TDD?
?  Test Driven Development (Desarrolo dirigido por test)    
    Es una practica de programacion que consiste en escribir primero las pruebas (generalmente unitarias)
    Despues escribir el codigo fuente que pase la prueba satisfactoriamente y por ultimo, refactorizar el codigo escrito

* Para que sirve?
    # Reducir la cantidad de bugs
    # Implementar solo las funciones necesarias en cada componente, asy como las librerias que usaremos
    # Desarrollar un producto modular,reutilizable y preparado para el cambio

* Ventajas 
    # Productividad: Tareas fraccionadas y superando test concretos
    # Tranquilidad: El codigo escrito despues de realizar los test esta totalmente protegido
    # Escalabilidad: Permite evaluar en que punto nos encontramos en cada momento
    # Refactoriazacion: El codigo se va reescribiendo a medida que se detectan errores
    # Depuracion: si aparece un bug y modifcamos el codigo hasta que pase el test

*/


//// #######################################################################################################################
//?                     unit testing JASMINE

/* 
Son principalmente trozos de codigo diseñados para comprobar que el codigo principal esta funcionando como esperabamos

* Como?
    # Arrange: donde se definen los requisitos que debe cumplir el codigo principal
    # Act: el proceso de creacion, donde vamos acumulando los resultados que analizaremos
    # Asert: Que se considera el momento en que comprobamos si los resultados agrupados son correctos o incorrectos
    * dependendiendo del resultado se valida y continua, o se repara, de forma que el error desaparezca


todo, Como correr las pruebas?
    ng test
    * cuando la aplicacion es muy grande, correr los test es muy pesado por lo que es bueno generar un reporte:
        ng test --code-coverage

*/
////###########################################################################################################################
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';p
////###########################################################################################################################
//?  IGUALDADES Y COINCIDENCIAS

describe('AppComponent', () => {
	let app: AppComponent
	// hace un test antes de los it y es async para que cargue toda la app primero y luego aplica el beforeEach
  beforeEach(async(() => {
	app = new AppComponent()
  }));

  //todo/    IGUALDADES
  it('El valor de mi variable llamada hola debe ser hola mundo', ()=> {
    const variable = app.hola
    expect(variable).toEqual('hola mundo')
  })

  //todo/    COINCIDENCIAS o CONTIENE
  it('la variable saludo debe contener Diego', ()=> {
      const variable = app.saludo
      expect(variable).toContain('Diego') // la variable quizas tiene variable = 'hola como estas diego' entonces es una coincidencia
  })
}
////###########################################################################################################################
//?  BOOLEANOS

it('Debe retornar TRUE',()=> {
    const respuesta = app.numeroPar(4)
    expect(respuesta).toBeTruthy()
})

it('Debe retornar FALSE',()=> {
    const respuesta = app.numeroPar(4)
    expect(respuesta).toBeFalsy()
})
////###########################################################################################################################
//! CICLO DE VIDA DE LAS PRUEBAS
/* 
    * afterAll
        # se ejecuta solo UNA VEZ automaticamente,despues del describe.
    * afterEach
        # se ejecuta DESPUES de CADA it
    * beforeEach
        # se ejecuta antes de CADA it 
    * beforeAll
        # se ejecuta solo UNA VEZ automaticamente,antes del describe.
*/
////###########################################################################################################################
//?     COMO HACER FOCO SOBRE UNA PRUEBA ESPECIFICA
/* 
se debe agregar la letra f antes del it
en el navegador con ng test, te sale remarcado para que sea mas facil identificar.
! Ejecuta solo la que tiene la f, evita todas las demas
* si se lo ponemos al discribe, se remarca todo el componente

*/
fit('prueba',()?>{})
fdescribe('')
////###########################################################################################################################
//? PROBANDO SERVICIOS HTTP
/* 
* Necesitamos saber el objeto que viene desde backend para crear una interface

    # Aparte de testBed, se debe importar el getTestBed
    # importar http testing
*/
import { TestBed,getTestBed} from '@angular/core/testing';
import {httpClientTestingModule, HttpTestingController} from '@angular/common/http/testing;

describe('nameService', ()=>{        
    let service: LoginService;
    // Lo usamos para simular solicitudes
    let httpMock:HttpTestingController
    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [LoginService, HttpClient],
        });
        service = TestBed.get(LoginService);
        httpMock = TestBed.get(HttpTestingController);
      });

    afterEach(()=>{
        // despues de cada it verificamos que no haya solicitudes pendientes
        httpMock.verify()
    })

    it('Debe ser creado', ()=> {
        const service: authService = TestBed.get(authService)
        expect(service).toBeTruthy()
    })

    it('Debe retornar un observable<Auth[]>',()=> {
        // Instanciamos el servicio
        const service: authService = new authService // esto es lo mismo que hacer TestBed.get(authService)

        // simulamos un mock (objeto simulado)
        let mockAuth:Auth[] = [
            {
            login: 'valor',
            edad: 15
            perreo: 'intenso'
            },
            {
                login: 'otrovalor',
                edad: 15
                perreo: 'intenso'
            },
        ];


        // probamos el metodo del servicio
        service.getAll().suscribe(auths=>{
            expect(auths).toEqual(mockAuth)
            expect(auths[0]).toBeDefined()
        })

        // nos comprueba que se haya hecho una simulacion con la url dada y nos devuelva una respuesta
        const req = httpMock.expectOne('urlApi')
        expect(req.request.method).toBe('GET')
        req.flush(mockAuth) // proporcionar valores ficticios como respuesta de nuestras peticiones
    })
})

////###########################################################################################################################
//?  SPIAS (SPY ON)
    //* Un ESPIA SE UTILIZA PARA PROBAR QUE SE LLAMEN METODOS.
    // Una vez testeado el metodo del servicio. Se debera llamar ese metodo en el componente, el cual debera ser trabajado con SPIAS

// componente que usa el metodo del servicio:
import {httpClientTestingModule, HttpTestingController} from '@angular/common/http/testing;

describe('AppComponent', () => {
	let app: AppComponent
    let service:
	// hace un test antes de los it y es async para que cargue toda la app primero y luego aplica el beforeEach
//importar el servicio dentro del beforeEach, en TestBed
beforeEach(()=> {
    TestBed.configureTestingModule({
        providers:[
            authService,
            AppComponent
        ],
        imports:[
            httpClientTestingModule,
            HttpTestingController
        ]
    }).compileComponents()
    app = TestBed.get(app)
    servicio = TestBed.get(authService)
    // tener acceso a las variables limpias antes de cada it
    injector = getTestBed()
    httpMock = injector.get(httpClientTestingModule)
})

it('Debe llamar al Servicio authService y el metodo getAll para obtener todos los usuarios', () => {
    let mockAuth:Auth[] = [
        {
        login: 'valor',
        edad: 15
        perreo: 'intenso'
        },
        {
            login: 'otrovalor',
            edad: 15
            perreo: 'intenso'
        },
    ];
    
    // el callFake es para que sea llamada falsa
    const spy = spyOn(servicio, 'getAll').and.callFake(users => {
        return of(mockAuth) // importar of de rxjs
    })

    app.ngOnInit() // donde se llama el metodo que obtiene los usuario
    // es decir, si en el componente, en ngOnInit, dentro de este se llama al metodo que obtiene los usuarios con getALL.

    expect(spy).toHaveBeenCalled() // espera que sea llamado
})
////###########################################################################################################################
//?  EXCLUIR PRUEBAS
// se agrega la letra x
xdescribe('AppComponent', () => {})
xit()
////###########################################################################################################################
//? REPORTE DE COBERTURA DE PRUEBAS
// ng test --code-coverage
//* te crea una carpeta coverage con los archivos con una web y sus estadisticas en %
//todo,  Te va a decir que parte NO ESTA siendo probada
////###########################################################################################################################
//?*  KARMA
//todo, KARMA Es un entorno de pruebas,no es un framework, el framework es jasmine
/* cambiar en karma.conf, la variable singleRun, por el valor true: singleRun: true */ //? para que no quede en un ciclo infinito