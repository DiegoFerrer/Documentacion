/*
	¿Qué son los servicios en Angular 4?

	# Permiten centralizar funcionalidad
	# Pueden ser usados desde cualquier componente
	# Hacen nuestro app mucho más mantanible

	Se debe declarar tanto en el modulo (en providers ) como en el componente a usar (importando la clase del servicio)



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
