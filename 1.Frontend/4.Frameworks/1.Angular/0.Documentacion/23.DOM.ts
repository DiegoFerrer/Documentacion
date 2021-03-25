@ViewChild('contenedor',{static: true})
  contenedor: ElementRef

    noticiaHTML = ` 
				<div>
					<h2>como andas</h2>
					<p>$Perrito</p>
					<span>Todo bien?</span>
				</div>`


ngOnInit(): void {
	this.contenedor.nativeElement.insertAdjacentHTML('afterend', this.noticiaHTML)
	}


