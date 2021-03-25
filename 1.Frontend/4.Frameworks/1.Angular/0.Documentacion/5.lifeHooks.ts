
/*    ******************************* COMPONENTES *********************************

En el mundo angular, todo tiende a ser un componente y ademas formar parte de un modulo.
______________________________________________________________________________________________
|			   | 						|	|		  Clase			|	|		  			 |
|		       |	PLANTILLA y ESTILOS	|	| Propiedades y metodos	|	|     Metadatos		 |
|			   |------------------------|   |-----------------------|	|--------------------|
| COMPONENTE = |	* Vista				| + | * Codigo Fuente		| +	| * Decorador		 |
|			   |	* HTML				|   | * TypeScript			|	| * Funcion			 |
|			   |	* Binding			|   | *	Propiedades			|	| * Propiedades para |
|			   |	* Diretivas			|   | * Metodos				|	|   el framework     |
|			   |	* CSS				|   |						|	|					 |
*********************************************************************************************

------------------------ Ciclo de vida de un componente | LifeCycle Hooks -------------------
	

	Crear(constructor) changes, renderizar(ngOnInit), checked, destuir.
	
	? Constructor
		Crea todo el componente, no hay elementos del dom ni nada al que se pueda acceder
	? OnChanges
		! va a ser la primer funcion que se ejecute siempre y cuando haya un input
		Se ejecuta cada vez que un valor de entrada(inputs) sea modificado
	? OnInit 
		Inicializador de todo el contenido del componente, se ejecuta una unica vez
				
	? DoCheck
		Detecta cambios en el componente, solo en el componente. y se dispara por cada cambio
		Siempre se dispara una vez aunque no haya cambiaos nada.

	* AfterContentinit
		Inicia cuando el contenido(html) se cargue por completo
	* AfterContentChecked	
		! Se actualizada cada vez que algo del contenido(html) sea cambiado
	* ngAfterViewInit
		Se ejecuta al cargar todos los "view", por ejemplo, viewChild
		Mas que nada sirve para cuando traes vistas externas y que todavia no figuran en el onInit.
		Ya que todo el template INTERNO esta declarado en el onInit.
		Por ejemplo ,podes crear una directive que tenga un viewContainer y eso lo importas a otro HTML
		Entonces esto es externo y si queres acceder a el vas a poder hacerlo recien en el AfterViewInit
	* ngAfterViewChecked
		! Se ejecuta cada vez que un view se modifica

	? OnDestroy
		* Sirve para destruir procesos que el componente esta ejecutando en segundo plano
			Listener
			Observables
			Intervals
		# Cada vez que el componente se destruye(por ejemplo salis de ese componente para ir a otro [ruta])
	      se dispara una UNICA vez		
		# Al hacer un *ngIf, si es false, se destruye del DOM ese componente y por ende, se dispara el onDestroy
		? Si creamos un observable,un setInterval o un listener, DEBEMOS destruirlos en el OnDestroy
			* clearInterval(this.referencia)
			* unsuscribe()
			* etc


---------------------------------------------------------------------------------------------
*/

