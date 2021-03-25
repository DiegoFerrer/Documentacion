<!-- 
?                                    REDES

El subsistema de red de docker se puede conectar mediante controladores. 
Existen varios controladores de forma predeterminada y proporcionan la funcionalidad de red principal:
    * Bridge (default)
    * Host 
    * Overlay
    * Macvlan
    * None


? Ver que redes hay
    docker network ls
? para ver una red 
    docker network inspect nameRed | brigde
        * Revisar el apartado de containers, para ver las ip
? crear red
    docker network creat -d controlador nameRed | brigde nombreRed
todo, crear contenedor a una red
    docker run -d --net=nameRed --name nameContenedor image
    * en este caso los contenedores que esten fuera de esta red no podran acceder
    ? como conectar un contenedor externo a esta red y pueda acceder a algun contenedor?
        docker network connect nameRed nameContenedorQueQuieroQueSeAgregueAEstaRed




 -->