# FROM indica que queremos comenzar a crear nuestra imagen, pero esta esta basada en otra imagen
FROM ubuntu

# correr comandos dentro de las imagenes RUN | CUANDO SE CREA
RUN apt-get update && \
    apt-get install python3 -y && \
    # bandera -y para indicarle a ubuntu que si queres instalar asi n ote pregunta
    apt-get install postgresql-client -y && \
    # para instalar posgresql
    mkdir /app

# define el directorio de trabajo
WORKDIR /app

# definir variable de entorno | creando una variable mensaje
ENV MSG = 'Saludos a todos'

# ADD, agrega un arhivo/directorio al contenedor que puede ser en url externas o archivos comprimidos 
    #* . hace referencia al directorio de trabajo en este caso app
    #? este ejemplo dice que copie todo el directorio app de mi local y sus archivos y los cargue en la misma ruta pero en el contenedor

ADD . .
# COPY, se limita solo a copiar archivos de nuestra computadora local 

#* Usar python
# CMD ejecuta comandos | UNA VEZ QUE YA ESTA CREADO
CMD python3 -m http.server 5000 
    # comando de python para levantar un servidor en el puerto 5000

# Exponer mi servidor para afuera del contenedor
EXPOSE 5000