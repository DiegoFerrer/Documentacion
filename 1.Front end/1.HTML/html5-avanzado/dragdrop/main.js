/* 
	.: 		Eventos Drag &  Drop 		:.

	dragstart 	: cuando se inicia el drag
	dragend 	: cuando finaliza el drag
	dragover	: cuando esta sobre el elemento
	dragleave 	: cuando salio del elemento
	drop 		: cuando se suelta el elemento
*/

let container;
let elementoArrastrandose;

window.addEventListener('load',init);

function init(){
	container = document.querySelector('.container');
	container.addEventListener('dragover',dragSobreContainer,false);
	container.addEventListener('dragleave',dragSalioContainer,false);
	container.addEventListener('drop',manejarDrop,false);
	let circles = document.getElementsByClassName('circle');

	for(i in circles){
		let circle = circles[i];
		let x = random(0,90);
		let y = random(0,90);
		if(typeof circle.style != "undefined"){
			circle.style.top = y+'%';
			circle.style.left = x+'%';
			circle.addEventListener('dragstart',dragIniciado,false);
			circle.addEventListener('dragend',dragFinalizado,false);
		}
		
	}
}


function dragIniciado(e){
	// Cuando se ejecuta el dragstart
	this.style.backgroundColor = 'blue';
	elementoArrastrandose = this;
	let padre = document.createElement('p');
	let clon = this.cloneNode(true);
	padre.appendChild(clon);
	e.dataTransfer.setData('text',padre.innerHTML);
}
function manejarDrop(e){
	e.preventDefault();
	let datos = e.dataTransfer.getData('text');
	this.innerHTML += datos;
	elementoArrastrandose.parentNode.removeChild(elementoArrastrandose);
	this.classList.remove('over');
}
function dragSobreContainer(e){
	e.preventDefault();
	this.classList.add('over');
	return false;
}
function dragSalioContainer(e){
	this.classList.remove('over');
}

function dragFinalizado(e){
	this.style.backgroundColor = 'red';	
}
function random (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}