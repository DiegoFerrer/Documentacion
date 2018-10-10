class Progress {
	constructor(selector){
		this.barra = selector;
		this.cargar.bind(this)
		this.boton = document.getElementById('cargar');
		this.bindEvents();
	}

	cargar(){
		const intervalo = setInterval(() => {
			if (this.barra.value == 100) {
				clearInterval(intervalo)
				console.log(this.barra.value)
				
			}
			this.barra.value +=5;		
		},250)		
	}

	bindEvents(){
		this.boton.addEventListener('click',e => {
			e.preventDefault();
			this.cargar()
		})
	}
}




let barra = document.getElementById('barra');
new Progress(barra)