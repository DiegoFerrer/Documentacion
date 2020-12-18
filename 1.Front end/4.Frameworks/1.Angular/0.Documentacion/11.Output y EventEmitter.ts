/* 
Enviar datos DEL HIJO AL PADRE

Tenemos un event en el componente hijo, que ejecuta una funcion DEL COMPONENTE PADRE

*/

<html>
    
<parent-component>
    <child-componente (edit)="editar()"></child-component>
</parent-component>

</html>

// Clase del padre
editar($event){} // event va a contener lo que le mande el hijo, en este caso dato

// Clase hijo
@Output();
edit: EventEmitter<tipoDato> = new EventEmitter<tipoDato>;

// Cuando se haga algo desde el hijo, se debe llamar al event
// dato = objeto emitido hacia el padre
this.edit.emit(dato)