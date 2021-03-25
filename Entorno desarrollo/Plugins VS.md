<script>
* Live Share // trabajar en TIEMPO REAL con alguien
* Prettier // Ordenar codigo (Click derecho ,ordenar)
* editorconfig // para que todos los programador del proyectos tengan las mismas configuraciones
* eslint // linter para JS
* Material Icon Theme // iconos material
* Color highlight // Pone el color en css
* HTML Tag wrapper // Ctrl + i (Encerrar una etiqueta)
* rainbow brackets // colorea los brackets
* babel // te resalta mejor palabras reservadas de ES6
* one dark pro // theme
* css peek // click derecho -> go to definition. Sobre un HTML te lleva al CSS
* auto-rename-tag // para autorenombrar etiquetas HTML con solo nombrar una
* Better Comments // mejores colores para los comentarios
* python //
* sqlite //
* activitus bar // pasar la barra vs code vertical a horizontal
* auto close tag // cerrar etiquetas automaticamente
* Angular Essentials
* Angular Language Service
* docker
* npm, npm intellisense
* peacock
* prettier

"editor.wordWrap": "on",
</script>

<script>
//-                              SNIPPETS 

1. File, preferencias, user snippets

HTML
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

JAVASCIRPT Y TYPESCRIPT
	"Console log": {
		"prefix": "ccc",
		"body": [
			"console.log(${1:});"
		],
		"description": "Esto sirve para mostrar un console.log"
	},
	"backticks": {
		"prefix": "pp",
		"body": [
			"`${1:}`"
		],
		"description": "Esto sirve para mostrar un console.log"
	}


<script>