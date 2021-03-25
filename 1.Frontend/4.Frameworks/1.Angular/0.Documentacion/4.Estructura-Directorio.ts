/*

# app
	* pages
	* core?
		El Core Module es responsable de mantener los servicios globales. Lo más probable es que estos servicios sean servicios HTTP para comunicarse con una API. También se utiliza para almacenar guards, modelos y otras dependencias globales, como el interceptor http y el controlador de errores global. Para mantener una base de código bien estructurada y escrita, vamos a agrupar entidades typescript en su propia carpeta dentro del core module (clases, enums, interfaces).

		El Core Module agrupa “componentes” que si y sólo si se van a compartir a través de toda la aplicación pero generando una referencia única. (Es la única diferencia con el Shared Módulo). El Shared módulo debe ser importado, en cambio el Core Module por defecto va a estar en todos los módulos, sirve para guardar servicios que tengan una sola referencia de los datos.
			? services
			? guards
			? interceptors
			? mocks
				Los mocks son especialmente útiles para las pruebas, pero también puede usarlos para recuperar datos ficticios hasta que se configure el back-end. La carpeta simulacros contiene todos los archivos simulados de nuestra aplicación.
				*|-- user.mock.ts
	* shared
		componentes,servicios y modulos que van a ser utilizados por toda la aplicacion
		El Shared Module contiene código que se usará en todos los módulos de features, se utiliza solo para mantener componentes, pipes y directivas comunes en toda la aplicación
			? componentes
			? material
			? layout
				* header
				* navbar
				* footer
			? styles
			? directives
			? pipes
			? models
	* Folder Store (Administración del Estado)
		El directorio ~/src/store se utiliza para manejar el estado de la aplicación aplicando el patrón redux que actúa como un contenedor del estado global de nuestra aplicación. Almacena toda la información en un sólo lugar, la cual es representada bajo un objeto JavaScript accesible en todo momento.
		Es conveniente crear módulos para cada feature de la aplicación en este directorio, en los cuales se crearán las configuraciones de manejo de estado propias del patrón redux (State, Action, Reducer, Effect).

# assets
	? Tendra los archivos de imagenes, librerias externas,etc
# environments
	? variables globales o de entorno


















*/

