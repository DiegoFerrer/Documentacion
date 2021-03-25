<!-- 

#####################  Englobar codigo ######################
? 1. Ir a file, preferencias, atajos de teclado
? 2. ctrl + g

#####################  Lineas ###############################

! Seleccionar linea actual
    ctrl + L
* Seleccionar de a palabras
    ctrl + mayus + flecha 
? Mover lineas
    alt + flechas

todo, CLONAR LINEA
    shift + alt + flecha 

todo, MULTI CURSOR 
    ctrl + shift + alt + flecha

#############################################################
##################### Comentarios ###########################


* Toggle coment Linea
    ctrl + /
? Comentario seleccionado
    shift + alt + A
! Seleccionar palabras iguales 
    ctrl + shift + L
#############################################################
########################### Otros ###########################

! DESHACER
    ctrl + z 
* REHACER
    ctrl + shift + z
? VER E IR A LAS DEFINICIONES
    ctrl + shift + o

TODO ############################################################## SNIPPETS ########################################################

1. File, preferencias, user snippets

	"Console log": {
		"prefix": "ccc",
		"body": [
			"console.log(${1:});"
		],
		"description": "Esto sirve para mostrar un console.log"
	},
	"ngif": {
		"prefix": "ngif",
		"body": ["*ngIf=\"$1\""],
		"description": "Crea ngIf"
	},
	"ngfor": {
		"prefix": "ngfor",
		"body": ["*ngFor=\"let item of list$1\""],
		"description": "Crea ngFor"
	}
-->