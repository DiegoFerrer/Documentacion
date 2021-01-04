<!-- 

	para proyectos de organizaciones o trabajos en equipos

	! Crear Fork (Desde la pagina del repositorio en github)
		Crea una copia de un proyecto, pero con tu cuenta.

	* Clonar en mi maquina, el proyecto fork que cree para trabajar en esa rama	
		# git clone url

	* Añadir remoto del proyecto original para actualizar cambios 
		# git remote add cloud urlProyecto-original

	---------------------------------------------------------------------------------
    ?                 METODOLOGIA DE TRABAJO

	TODO. Supongamos que hay cambios en el proyecto original:
		# en el proyecto local DESDE MASTER
		* git pull cloud dev | traigo los cambios de dev a mi rama master local

	! En el proyecto local, se debe tener ramas para cada tarea 
	TODO. Subir cambios PROPIOS | tengo una nueva tarea llamada Tarea1
		# git branch -b Tarea1
		* Hago toda la tarea y subo esta rama
		# git add .
		# git commit 
		# git push origin Tarea1

	TODO. Subir cambios al proyecto original
		# desde hithub, en el proyecto local entrar a compare y pull request
		# mandar de nuestra Tarea1 al dev original
		# crear pull request
		* en el proyecto original 
			# Un administrador entra para aprobar el pull request
			# Hace merge del pull request

	TODO. Eliminar ramas locales
		* al terminar la tarea eliminar la rama
		 	git branch -D nameBranch
		* eliminarla tambien pero en el remoto
			git push origin --delete nameBranch

	! Ahora me traigo los cambios de la rama dev ORIGINAL a mi master/dev personal
		# git pull cloud dev
	

-->