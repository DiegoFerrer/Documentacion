import hashlib
from conexion import *

def comprobar_usuario():
    conexion = conectar()
    cursor = conexion.cursor()
    sentencia_sql = 'SELECT * FROM usuario'
    cursor.execute(sentencia_sql)
    usuarioEncontrado = cursor.fetchall()
    cursor.close()
    return usuarioEncontrado

def registrar(nombre,apellido,contraseña):
    try:
        conexion = conectar()
        cursor = conexion.cursor()
        sentencia_sql = '''INSERT INTO usuario (nombre,apellido,contraseña) VALUES(?,?,?)'''
        contraseña_cifrada = hashlib.sha256(contraseña.encode('utf-8')).hexadigest()
        datos = (nombre,apellido,contraseña_cifrada)
        cursor.execute(sentencia_sql)
        conexion.commit()
        conexion.close()
        return 'Registrado'
    except Error as err:
        print('ha ocurrido un error' + str(err))
    

    