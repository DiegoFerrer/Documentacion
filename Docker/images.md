<!-- 

Una imagen es una coleccion ordenada de camnbios en el sistema de archivos raiz y los parametros 
de ejecucion correspondientes para su uso dentro de un tiempo de ejecucion del contenedor

                        build               run
?|        dockerfile ----- docker image ----- docker container 

* Las imagenes tienen capas (layers)
    Contiene una union de sistemas de archivos en capas apilados uno encima del otro.
    ? Una imagen no tiene estado y nunca cambia


? docker hub
    Es un recurso centralizado para trabajar con docker y sus componentes. 
        * Alojamiento de imagenes en docker
        * Autenticacion de usuario
        * Construcciones de imagenes automatizadas y herramientas de flujo de trabajo
        * Integracion con github y bitbucket


todo]   COMO CONSTRUIR UNA IMAGEN?

* dockerfile
    Es un documento de texto que contiene todos los comandos que normalmente
    se ejecutarian manualmente para crear una imagen de docker

    Docker puede crear imagenes automaticamente leyendo las instrucciones de un dockerfile

    ! se debe llamar Dockerfile, con D mayuscula

    ? En la terminar llamar al dockerfile
        -t = tag/name para la imagen y version que le pongamos, contexto para crear la imagen(ruta) del docker file (si esta en el mismo lugar poner un .)
        * docker build -t nameEtiqueta:1.0 . 

todo, construir contenedor basado en la imagen que construimos
    docker run -d -p 5000:5000 --name contenedorName nameImagen



//#######################################################################################
 SUBIR IMAGENES A DOCKERHUB
  * crear repositorio en dockerhub
  ? En la terminal:
    * docker login
    * docker tag imagen nombredeusuario/nombreRepositorio:nameTagImagen
    * docker push imageCreada





 -->