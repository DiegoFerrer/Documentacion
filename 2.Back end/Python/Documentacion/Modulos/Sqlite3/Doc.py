''' 
SQLite, nos va a permitir crear una base de datos en forma de archivo
sin tener que instalar un motor de bases de datos SGDB

'''
#? conexion
import sqlite3
from sqlite3 import Error
# ctrl + shift + p , sqlite open dataBase y seleccionarla.

def conectar():
    try:
        conexion = sqlite3.connect('database.db') # database.db es el nombre de la base
        print('se ha conectado a la base de datos correctamente')
        return conexion
    except Error:
        print('Ha ocurrido un error')

def crear_tabla(conexion):    
    # un cursor me permite crear diferentes sentencias SQL
    cursor = conexion.cursor()
    sentencia_sql = '''CREATE TABLE IF NOT EXISTS nameTable
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL)'''
    cursor.execute(sentencia_sql)
    conexion.commit()
    conexion.close()

def insertar_varios(conexion, datos):
    cursor = conexion.cursor()
    sentencia_sql = 'INSERT INTO nameTable(nombre,apellido) VALUES(?,?)'
    cursor.executemany(sentencia_sql,datos)
    conexion.commit()
    conexion.close()
    
def consultar(conexion):
    cursor = conexion.cursor()
    sentencia_sql = 'SELECT * FROM nameTable'
    cursor.execute(sentencia_sql)
    datos = cursor.fetchall()
    conexion.close()
    return datos

def consultar_id(conexion,id):
    cursor = conexion.cursor()
    sentencia_sql = 'SELECT * FROM nameTable WHERE id=?'
    cursor.execute(sentencia_sql,(id,))
    datos = cursor.fetchall()
    conexion.close()
    return datos

def actualizar(conexion,id,nombre,apellido):
    cursor = conexion.cursor()
    sentencia_sql = 'UPDATE nameTable SET nombre=?,apellido=? WHERE id = ?'
    cursor.execute(sentencia_sql,(nombre,apellido,id))
    conexion.commit()
    conexion.close()

def eliminar(conexion,id):
    cursor = conexion.cursor()
    sentencia_sql = 'DELETE FROM nameTable WHERE id = ?'
    cursor.execute(sentencia_sql, (id,))
    conexion.commit()
    conexion.close()


conexion = conectar()

# crear_tabla(conexion)
# datos = [('Jorge','Ferrer')]
# insertar_varios(conexion,datos)
# data = consultar(conexion)
# for dato in data:
#     print(dato[1])
# data = consultar_id(conexion,5)
# if len(data) > 0:
#     print(data[0][1])
# actualizar(conexion,2,'Ricardo','Lavolpe')
eliminar(conexion,6)