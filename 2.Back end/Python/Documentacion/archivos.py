"""
    Leer y escribir archivos
"""
# Crear directorio con os.makedirs
import os
os.makedirs("./data/nombreDirectorio/", exist_ok=True)

# Listado de archivos
archivos_carpeta_actual = os.listdir(".")
print(archivos_carpeta_actual)

# Escribir archivos

# Abrir archivos | si el archivo no existe dará error
archivo = open("./data/archivo.txt")

# crear archivo para escribir, hay que especificar el metodo de escritura
archivo_para_escribir = open('archivo.txt', "w")
archivo_para_escribir.write('Hola')
archivo_para_escribir.write('Mundo')
# No se escribe nada hasta que cerramos el archivo
archivo_para_escribir.close()

# Si se usa el metodo w (write), se sobrescribe el archivo. para no perder lo que ya hay ,hay que usar le metodo a (append)

""" 
El metodo open,close no es ideal. Basicamente si ocurre un error entre los dos metodos podemos perder el archivo.

La mejor manera de leer y escribir archivos es mediante el contexto with
"""
usuarios = ['Manuel','Antonio','Juan']
with open("archivo.txt","w") as fname:
    for usuario in usuarios:
        fname.write(usuario)

# Si queremos escribir un elemento de la lista,en una linea
with open("archivo.txt","w") as fname:
    for usuario in usuarios:
        fname.write(usuario)
         fname.write("\n")

# LEER
with open('archivo.txt') as fname:
    datos = fname.read()
    print(datos)

# LEER ARCHIVO POR LINEA
usuarios=[]
with open('archivo.txt') as fname:
    # Devuelve una lista el readline
    lineas = fname.readlines()
    for linea in lineas:
        usuarios.append(linea.strip("\n"))
print(usuarios)



""" LIBRERIA POTHLIB

En windows las carpetas se definen con \ mientras que en mac o linux se usa /

Esto puede dar errores
Una manera de garantizar que podemos acceder a archivos independimiente del sistema operativo es con el modulo pathlib(disponible a partir de python 3)
""" 

from pathlib from path

carpeta = Path("urlDirectorio")
archivo = carpeta / "archivo.txt"

# No hay que usar with
archivo.read_text()
# Escribir
archivo.write_text('texto')