<!-- 
?   Docker Compose
Es una herramienta para definir y ejecutar aplicaciones docker de varios contenedores.

Con compose,usa un archivo YAML para configurar los servicios de su aplicacion. Luego,con un solo comando, crea
e inicia todos los servicios desde su configuracion

construye la imagen y levanta el contenedor

te crea una red para administrar los servicios

todo, Como funciona?
    * 1. Defina el entorno de su aplicacion con un Dockerfile para que pueda reproducirse en cualquier lugar.
    * 2. Defina los servicios que componen su aplicacion en docker-compose.yml para que puedan ejecutarse juntos en un entorno aislado
    * 3. Ejecute docker-compuse up y Compose inicia y ejecuta toda su aplicacion 

! en docker Desktop ya viene instalado

en consola:
    docker-compose up -d --build

* ver variables de entorno
    docker-compose run nameServicio ComandoDentroDelContenedor
    docker-compose run web bash
        echo $MSG

! dar de baja servicio docker compose 
    * ademas de detenerlo los elimina
    docker-compose down


//##################################################################################################
?                   SERVICIOS
Son la manera en la cual docker-compose crea los contenedores y los intercomunica entre si

conectar los contenedores o servicio entre si:
* en este ejemplo se conectara el servicio web con el servicio de postgress (servicio o contenedor)
    docker-compose run web bash
        psql -p 5432 -h db -U postgres -W postgres
//##################################################################################################
?               VARIABLES DE CONSTRUCCION
archivo .env | este archivo tiene que estar a la misma altura que el docker-compose
//##################################################################################################
?               VOLUMENES








 -->