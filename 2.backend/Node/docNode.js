/* 
? Node funcioina en base a eventos (peticiones,envio de datos,etc)

* Todo el codigo de node funciona de forma asincrona, es decir que si tengo una funcion que esta siendo ejecutada, el resto NO va a tener que esperar, si no que se ejecuta de forma asincrona

* Tiene un solo hilo de procesamiento, es el encargado de manejar todos los eventos que llegan al servidor en un bucle, esto permite manejar miles de conexiones a la vez.

BENEFICIOS DE USAR NODE
    * Permite añadir modulos externos utilizando NPM
    * Alto rendimiento en aplicaciones en tiempo real
    * Mayor escalabilidad
    * Usa Javascript
    * Usado por paypal,Netflix,Uber,Linkedin,etc

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

? CONSOLA Para escribir codigo Js
    # Abro una terminal y escribo node y enter.
    # escribir codigo en un archivo js y ejecutar con jode archivo.js


? NPM (Node Package Module) --> es el manejador de paquetes de node
    * npmjs.com

    npm init -y , permite crear un archivo de config de proyecto (package.json)
    npm install modulo --> para instalar algun paquete externo
        en el archivo , require('nameModulo')
    ? npm install modulo -d --> Para indicar que es solo para DEV


Todo, modulos
    ? npm install nodemon -D 
        refresca los cambios automaticamente
        en scripts agregar un "server" :  "nodemon index.js"
    
*/