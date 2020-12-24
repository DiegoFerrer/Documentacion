/* 
--*        Que es MySQL?
    * Es un SGBD (Sistema Gestor de Bases de Datos)
    * Soporte multiples conexiones a la vez
    * Multiplataforma
    * Relacional | toda la informacion esta en tablas, columnas,etc.
    * CI: mayusculas y minusculas las toma por IGUAL
    * AI: ascentos o no ascentos de una letra las toma por IGUAL

    --! MARIADB, es SQL version OpenSource, es igual que MySQL solo que esta ultima la compro ORACLE
    --? DOCUMENTACION: https://www.google.com/search?q=mysql+documentation&rlz=1C1SQJL_esAR906AR906&oq=mysql+doc&aqs=chrome.2.0j69i57j0l5j69i60.2863j0j7&sourceid=chrome&ie=UTF-8

--TODO|   Instalacion de MySQL en LINUX
    * sudo apt install mysql-server
    * service mysql status | --* para ver el estado del servidor
    * sudo service mysql start | --? iniciar servidor
    * sudo service mysql stop |--! apagar servidor
    * sudo mysql |--* cliente linea de comandos
    * quit |--* para salir del cliente

--? COMANDOS linea de comandos
    * show databases; |--* ver las bases de datos disponibles
    * use databaseName; |--* posicionarse sobre una base de datos
    * show tables; |--* ver las tablas disponibles
    * describe nameTable |--* te muestra como esta estructurada la tabla

--TODO| Configuracion basica
    * A.vim /etc/mysql/my.cnf | para ver el archivo de configuracion
    * B.vim/etc/mysql/mysql.config.d | para ver mas sobre la configuracion
    * C.seleccionar mysqld.cnf
    * D.--? Te muestra el usuario, puerto,etc.

--TODO| Crear base de datos Y Tables
    * CREATE DATABASE name; |--* crea la base
    * use nameDatabase
    * CREATE table nameTable(definicion de sus columnas separadas por,)
        --? CREATE table tbl(id,int(11)), name varchar(50)); 
    *
--TODO| Alterar Tablas (agregar columnas,etc)
    * ALTER table nameTable ADD column nameColumn VARCHAR(200);

--! ELIMINAR una TABLE
    * DROP table nameTable;

--! ELIMINAR una Base de Datos
    * DROP DATABASE nameDB;
    
*/