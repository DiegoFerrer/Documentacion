// No es una buena practica usarlos
// Accede a los elementos del template desde la clase
// #variable, lo que hacemos es accder al alemento atraves de esta variable

<input #filter type="text" />

// Clase TS

export class Component implements AfterViewInit {
    
    @viewChild('filtro', {static:false})
    filtro: ElemenRef;

    ngAfterViewInit(){
        this.filtro.nativeElement.value = 'Angular' // accedo al elemento, en este caso input y le doy un valor
    }
}
