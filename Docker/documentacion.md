<!-- 

? Docker automatiza el despliegue de aplicaciones dentro de contenedores de software. 
    * Proporciona una capa adiciona de ABSTRACCION
    * Automatizacion de virtualizacion de aplicaciones en multiples sistemas operativos

! Elimina el clasico: "En mi computadora si funciona" 

Que son los contenedores?
    Los contenedores son una abstraccion en la capa de la aplicacion que empaquete el codigo y las dependencias juntos
        ? Que es un contenedor? 
        Es una unidad estandar de software que empaquete el codigo y todas sus dependencias para que la aplicacion 
        se ejecute de forma rapida y confiable de un entorno informatico a otro

Que diferencia hay con una maquina virtual?
    Las MV son una abstraccion del hardware fisico que convierte un servidor en muchos servidores
    ? es decir, divide la capacidad de computo, pueden tener distintos sitemas operativos,etc.


* Por eso los contenedores son un poco mas agiles, usan el mismo sistema operativo,etc



todo, Instalacion de docker

* Docker Desktop | Solo funciona para windows y mac
    Permite manejar docker y los contenedores de manera sencilla con una interfaz grafica.  
* Docker Engine | Linux
    revisar documentacion para ver como se instala en ubuntu
* Play with docker | plataforma web
    Sin instalar nada, te permite utilizarlo en la plataforma web



//################################################################################################################################################
?               Arquitectura

1. Server - Docker Deamon, es el nucleo de docker, el que maneja
2. Rest API ,es una API que se ejecuta funciones para el Docker Deamon
3. Client Docker CLI, es una interfaz que ejecuta toda la funcionalidad de la REST Api ,para que esta la lleve acabo en el docker deamon
    * manejo de contenedores
    * manejo de redes
    * manejo de volumenes de datos
    * manejo de imagenes

? Arquitectura de docker

Client - DOCKER_HOST  - Registry

* Client
    Donde especificamos instrucciones o comandos para que docker levante los contenedores
        docker build
        docker pull
        docker run
* DOCKER_HOST 
    Especificacion al demonio de docker para que haga algo por nosotros
        Con las instrucciones que mandamos desde el cliente, el demonio de docker crea imagenes (una especie de ISO)
        que contiene ciertos parametros y configuraciones sobre COMO tiene que levantar un contenedor
* Registry
    Es un catalogo donde puedo encontrar todas las imagenes disponibles (como los npm modules) 
    si no tengo una imagen de python por ejemplo voy y la busco
//################################################################################################################################################
todo,                   HOLA MUNDO

CONSOLA: 
    docker run hello-word

todo,           CORRER UN SERVIDOR WEB NGINX
    docker run -p 80:80' nginx:1.17-alpine | para manejar una version especifica de nginx y exponer nginx con el 80:80
    ! como no la tiene docker en local, va a registry y trae nginx
    * Ver ip con ipconfig | o buscar comando para tu sistema operativo
        poner ip en el navegador y vas a ver como esta corriendo el contenedor 
//################################################################################################################################################
?                         IMAGENES
    * Ver que imagenes tenemos en local
        docker image ls
    * Descargar image de registry
    ? https://hub.docker.com/
        docker pull nameImage | ej: docker pull python:3 ,me descarga la version espeficia, pero si no la especifico trae la ultima

todo, CREAR CONTENEDOR BASADO EN IMAGENES
    docker run nameImage | ejemplo: docker image python 

//################################################################################################################################################
?                         LOGS,PROCESOS Y PUERTOS

* como correr un contenedor sin que el proceso este corriendo en la terminal todo tiempo?
    docker run -d nameImage / con -d corre un proceso aparte del sistema
* visualizar el contenedor que esta corriendo actualmente
    docker ps | te da informacion del nombre de la imagen, comando, puerto,etc
* ver todos los contenedores, tanto los que funcionan como los que no
    docker ps -a
* crear un nombre mas descriptivo para el conenedor
    docker run -d --name name-Contenedor nameImage
* ver salida o LOGS de los contenedores
    docker logs nameContenedor
* ver que proceso se ejecuta de manera interna en el contenedor
    docker top nameContenedor

todo, como decirle a docker, que nosotros queremos acceder a un puerto de nuestro contenedor?
    docker run -d -p 4000:80 --name nameContenedor nameImage | -p nos permite tomar un puerto de nuestro contenedor y exponerlo en maquina local | localhost:puerto
        ? todos los que accedan al puerto 4000 de mi maquina, seran dirigidos al puerto 80 del contenedor,donde esta nginx


? EJECUTAR COMANDOS, DENTRO DEL CONTENEDOR
    docker exec -it nameContenedor comando | ls,mkdir,etc
    docker exec -it bash | para iniciar sesion en la terminal y poner comandos mas rapido

! DETENER CONTENEDOR
    docker stop nameContenedor

! ELIMINAR CONTENEDORES
    docker rm nameContenedor
//################################################################################################################################################

        DISEÑO DE APPS BASADO EN DOCKER










-->