<!-- 	
	* git config --global user.name "name"
	* git config --global user.email "mail"
		# datos cfg
	* git init	
		# Crear un nuevo repositorio
	* git clone url
		# Clonar un repositorio
	* git branch 
		# muestra lista de branchs
	* git checkout NombreDeBranch 
		# moverse entre ramas
	* git remote -v 
	 	# listar remotos
	* git log 
		# Muestra los logs de los commits
	* git reset HEAD <archivo>
		# Saca un archivo del commit
	* git fetch
		# Verifica cambios en el repositorio online con el local


	! Al momento de subir una version al servidor, se recomienda crear una etiqueta de la version
	? SIEMPRE EN LA RAMA MASTER
	* git tag "name"
		# git tag "v0.0.1"
	* git log 
		# para ver la etiqueta
	* git push origin --tags 
		# para subir esto a la nube


	? git stash | permite almacenar temporalmente los cambios en memoria hasta volver a usarlo
		# tengo una rama con una tarea incompleta, obviamente no la puedo subir y tengo que hacer otra tarea:
		* git stash | parado desde la rama incompleta
		---
		# ahora puedo trabajar en otra rama 
		! al terminar con la otra tarea, volver a la rama y traer la rama de la memoria
		# git stash list | para ver si tengo algo en stash
		* git pop | parado desde la rama incompleta

-->