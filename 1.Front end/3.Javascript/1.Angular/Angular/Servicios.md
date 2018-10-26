
<!--  
	¿Qué son los servicios en Angular 4?

	# Permiten centralizar funcionalidad
	# Pueden ser usados desde cualquier componente
	# Hacen nuestro app mucho más mantanible

 -->
<!-- 
	Crear ccarpeta Services
-->

<html>
	

</html>

<script>
	// archivo.services.ts
	import {Injectable} from '@angular/core';
	@Injectable() // esto es para que pueda ser injectado desde otros componentes
	export class nameService{
		lugares:any =[
		{id:,plan:'pagado',cercania:1,distancia:1,nombre:'wilde'}
		{id:,plan:'pagado',cercania:1,distancia:1,nombre:'sarandi'}
		{id:,plan:'pagado',cercania:1,distancia:1,nombre:'dominico'}
		];
		public getLugares(){
			return this.lugares;
		}
	}

	// injectar este servicio en providers del modulo a usar
	/* en el constructor del componente a usar el servicio, declarar como variable privada
		e importar el servicio
	*/
	import {LugaresService} from 'urlServicio'
	this.nombre;
	constructor(private lugaresService: LugaresService){
		this.nombre = lugaresService.nombre
	}
</script>