/* 
    --* Administracion de usuarios
    --! Autenticacion 
        * Valida que una persona,recurso,etc. Sea lo que dice que es
            * Host (de donde estoy tratando de ingresar)
            * User (Nombre de usuario)
            * Password (seguridad)
     --! Autorizacion
        * Una vez que estoy seguro de lo anterior, necesito saber si esta autorizada para la accion solicitada

    --* MySql es la base de datos que contiene los "MetaDatos"
        --? Table user, de la db MySql

    --! GENERALMENTE, VIENE POR DEFECTO EL ROOT: 
        --TODO, Creamos un usuario nuevo con menos privelegios que el ROOT.
            * create user 'name'@dondeMeVoyAConectar identified BY 'password' | create user 'Diego'@localhost identified '1234';
            --? para ver esto: select User, Host from user
            --* mysql -u Diego -p | esto es para identificarme como ese usuario

    --? PRIVILEGIOS DE USUARIO
        --*| Administrativos 
            # manejo completo del servidor
        --*| Base de datos 
            # manejo completo de una base de datos
        --*| Objetos de bases de datos 
            # permisos especificos sobre tablas,vistas,etc
        
        --TODO, Asignacion de privilegios
            --? GRANT
                * GRANT ALL ON db1. * TO 'user'@'host' |--! Le da todos los permisos al usuario sobre la base db1
            --? REVOKE
                * REVOKE INSERT ON db1. * FROM 'user'@'host' |--! quitarle permisos a ese usuario
            --? SHOW GRANTS 
                * SHOW GRANTS FOR 'user'@'host' |--! consultar los permisos de los usuarios


*/