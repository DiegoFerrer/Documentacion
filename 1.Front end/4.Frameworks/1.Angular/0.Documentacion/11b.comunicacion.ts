// pasar data de un componente a otro que son HERMANOS
//?                                                         con un servicio

//  - ¿Porque esto funciona? Funciona porque los servicios no se descargan en ningún momento, mientras que los componentes se cargan y descargan conforme navegas por la pagina, los servicios siempre están cargados en memoria y por tanto siempre tienen los datos

// - ¿Cuando se produce el cambio exactamente? El cambio se produce cuando estamos en el servicio y llamamos al método emit(). Cuando llamamos al evento, este se encarga de hacerle llegar al EventEmitter los datos.

// - Pero, tu lo haces en una sola dirección, ¿Puede ser bidireccional? Claro, los métodos están en el servicio y los puedes llamar desde donde quieras, y si guardas a la persona como un parámetro podrías acceder al html con la sintaxis de los dobles corchetes de esta forma:

//! ###############################################################################################################################################################################


//* MODEL 
// Interfaz Persona

export interface Persona {
  nombre: string,
  apellido: string
}

//? SERVICIO de PERSONA
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interfaces/Interfaz';


@Injectable({
  providedIn: 'root'
})

export class ServicioPersona {

  // Creamos la persona
  persona: Persona;
  
  // Con output creamos el nuevo EventEmitter. De este objeto obtendremos los cambios.
  @Output()
  personaEmitter = new EventEmitter<Persona>();


  constructor() { }

  // Cambiamos el atributo this.persona y llamamos a cambioPersona().
  setPersona(nuevaPersona: Persona) {
    this.persona = nuevaPersona;
    this.cambiosPersona();
  }

  // Emitimos los cambio de this.persona.
  cambiosPersona() {
    this.personaEmitter.emit(this.persona);
  }
}
//? ####################################################################################

// Componente1: Componente que cambia la persona

import { Component, OnInit } from '@angular/core';
import { ServicioPersona } from 'src/app/services/service/serviciopersona.service';
import { Persona } from 'src/app/interfaces/Interfaz';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})

export class Componente1Component implements OnInit {

  persona: Persona;

  constructor(private servicio: ServicioPersona) { }

  // Inicializo persona a vacío para que no me arroje un error, pero esto no es necesario realmente.
  ngOnInit(): void {
    this.persona = {
      nombre: '',
      apellido: ''
    }
  }

  // Estas dos funciones funcionan exactamente igual, crean una persona y la envían al servicio. Estos métodos se llaman desde el html con un evento (click).
  cambiarPersona1() {
    this.persona = {
      nombre: 'nombre1',
      apellido: 'apellido1'
    }
    // podrías agregar un console.log() para saber que persona estas enviando en este punto en ambos métodos.
    this.servicio.setPersona(this.persona)
  
  }

  cambiarPersona2() {
    this.persona = {
      nombre: 'nombre2',
      apellido: 'apellido2'
    }

    this.servicio.setPersona(this.persona)
  }
}

// #################################################################################################

//Componente2: Consultar la persona 

import { Component, OnInit } from '@angular/core';
import { ServicioPersona } from 'src/app/services/service/serviciopersona.service';
import { Persona } from 'src/app/interfaces/Interfaz';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component implements OnInit {

  persona: Persona;

  constructor(private servicio: ServicioPersona) { }

  ngOnInit(): void {
    // Nos suscribimos al Emitter del servicio que habíamos declarado con @Output,
    // y le decimos que persona sera lo que nos devuelva el observable de personaEmitter
    this.servicio.personaEmitter.subscribe(
      data => {
        this.persona = data;
      }
    );
  }

  // Este método se llama desde un botón y nos imprime el estado actual de la persona por consola.. 
  obtenerPersona() {
    console.log(this.persona)
  }
}

// ##################################################################################################


