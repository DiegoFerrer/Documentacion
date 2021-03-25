/*

	***************** Instalacion *******************

	****************************************************************************************  
	* ng add @angular/material | nos permite instalar todo lo siguiente de forma automatica.*
	****************************************************************************************
		npm install --save @angular/material @angular/cdk
		npm install --save @angular/animations
			se debe importar en el modulo principal,{BrowserAnimationsModule} from '@angular/platform-browser/animations
		npm install --save hammerjs | algunos componentes de material utilizan hammer para GESTOS
			* en main.ts import 'hammerjs;
		en styles.css: @import "@angular/material/prebuilt-themes/indigo-pink.css" | para elegir un tema
		ICONOS MATERIAL DESING --> index-html: <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
		rel="stylesheet">
	
	--------------------------------------------------------------------------
	CREAR en app/ un material.module.ts para agregar todos los componentes ahi
	ng generate module material
	import {componenteMaterial} from '@angular/material'

	Luego en el modulo del componente que quieras usar algo de material debes:
	import { MaterialModule } from './material.module'

	VER ARQUITECTURA ANGULAR 


*/
//  material.module.ts
	import { NgModule } from '@angular/core'

	import { 
		MatButtonModule,
		MatInputModule,
		ETC 
	} from '@angular/material'

	@NgModule({
		imports: [
				MatButtonModule
		],
		exports: [		
		MatButtonModule
		]
	})

	export class MaterialModule {}


// luego en el modulo del componente ,que necesites usar un material component:
import { MaterialModule} from './material.module'

/* 
	******* GENERANDO COMPONENTES CON MATERIAL *******

	angular viene con Angular CLI schematics para facilitar la creacion de app con Material
	Por ejemplo podemos generar un DASHBOARD completo con solo un comando
		* ng generate @angular/material:dashboard name | esto significa que estamos usando un schematic en este caso dashboard y le damos un nombre al componente
		* te genera un componenete y se debe usar el selector para ponerlo en plantilla

*/