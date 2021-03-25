/*
	Es un conjunto de funcionalidades que vamos a user en muchas partes

	# Permiten centralizar funcionalidad
	# Pueden ser usados desde cualquier componente
	# Hacen nuestro app mucho más mantanible

	? Se debe declarar tanto en el modulo (en providers ) como en el componente a usar (importando la clase del servicio)

	https://medium.com/@cristianflores.ee/providers-en-angular-1832e8093e2a
	Con lazy loading los módulos se cargan solo cuando se necesitan; por ejemplo, al enrutar a un módulo de usuarios premium, el módulo se cargará solo si el usuario se autentica como usuario premium. Estos módulos no se cargan desde el inicio. Esto significa que los servicios en los arrays providers no están disponibles porque el inyector root no conoce estos módulos.
	Cuando el enrutador angular de carga un módulo de forma diferida (lazy loading), crea un nuevo inyector. Este inyector es un hijo del inyector raíz


	Crear ccarpeta Services
*/

	// app module
	import { HttpClientModule } from '@angular/common/http';

	// WEATHER SERVICES.TS
	import {Injectable} from '@angular/core';
	import {HttpClient} from '@angular/common/http';

	@Injectable({
		providedIn: 'root'
	}) // esto es para que pueda ser injectado desde otros componentes

	export class WeatherService {
		ApiKey: string = 'key'
		URI: string;
		constructor(private http: HttpClient){
			this.URI = 'urlAPi'
		}

		// Metodos
		getWeather(cityName: string, countryCode:string){
			return this.http.get(`${this.URI}${cityName},${this.URcountryCode}`)
		}
	}

	// app.component.ts
	import {WeatherService} from 'weatherService';

	export class APpComponet implements OnInit{

		constructor(private weatherService:WeatherService ){

		}

		ngOnInit(){
			this.weatherService.getWeather('buenos aires','ar')
			.suscribe(
				res => console.log(res),
				err => console.log(err)
			)
		}
	}
