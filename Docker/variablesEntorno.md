<!--  
?           VARIABLES DE ENTORNO
Son valores que utiliza el SO para configurar programas y aplicacion
    dockerfile:
        !ENV MSG = 'Saludos a todos'

todo, como ver o usar la variable de entorno
entrar al modo interactivo desde la consola:
    * docker exec -it contenedor bash 
    * echo $VARIABLE | echo para imprimir 

todo, si quiero cambiar la variable al ejecutar el contenedor:
    agrego la bandera -e VARIABLE=VALORNUEVO
    
    
    -->