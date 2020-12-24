<!-- 
! Que es una base de datos?
Es un conjunto de informacion organizada que cumple con un objetivo comun.

? Todos los MOTORES de base de datos usan SQL, solo cambian algunas funciones


*SGBD (Sistema Gestor de Base de Datos)[DBMS]
    # Es la herramienta que permite administrar una base de datos
    ? Dentro de las mas conocidas SGBD Relacionales estan:
        # MySQL (Es de Oracle)
        # Sql Server (Microsoft)
        # MariaDB (Ex MySQL, openSource)
        # Oracle
        # DB2 (IBM)
        # Informix
    ? Dentro de las mas conocidas SGBD NO Relacionales estan:
        # Mongo DB
        # FireBase (Google)
        # CouchDB
        # Neo4j
        # Cassandra
--------------------------------------------------------------------------------
* Motor de base de datos SGBD Postgresql (openSource)
* Cliente PgAdmin

TODO, Instalar PostgreSQL en WINDOWS
    # postgresql.org y descargar
    # es una exclenete practica tener otro disco o particion para instalar la base de datos
    # Elegir contraseña para usuario administrador (root)
        # usuarioAdmin = postgres
    # seleccionar el puerto del servidor
        # elegir el puerto por defecto 5432 
    # configuracion regional por defecto
    ! entrar a la carpeta de la data:
        # abrir con VS: postgresql.conf (archivo de configuracion)
            * listen_addresses = '*' (todas las maquinas) | que maquinas(IPs) van a poder conectarse por red a mi postgress 
                # por defecto viene en localhost
                # en produccion se debe agregar las o la IP que se va a conectar, si son mas se separan con ,
        # abrir pg_hba.conf (archivo de configuracion de autenticacion del cliente)
    
    ? Reiniciar servicio
        # Ingresar a servicios en windows
        # Detener y reiniciar el servicio postgres

    * Ingresar desde consola
        # buscar psql
        # Te pregunta que server te queres conectar,por defecto localhost, dar ENTER
        # Que base de datos? la base inicial y principal se llama postgres, dar ENTER
        # port, ENTER
        # user, postgres para entrar con el super admin
------------------------------------------------------------------------------------------------------------------------------


-->