import sqlite3
from sqlite3 import Error

def conectar():
    try:
        conexion = sqlite3.connect('gestor.db') # database.db es el nombre de la base
        print('se ha conectado a la base de datos correctamente')
        return conexion
    except Error:
        print('Ha ocurrido un error')

def crear_tabla(conexion):    
    # un cursor me permite crear diferentes sentencias SQL
    cursor = conexion.cursor()
    sentencia_sql1 = '''CREATE TABLE IF NOT EXISTS usuario
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    contraseña TEXT NOT NULL
    )'''
    sentencia_sql2 = '''CREATE TABLE IF NOT EXISTS contraseña(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,       
        url TEXT NOT NULL,
        nombre_usuario TEXT NOT NULL,
        contraseña TEXT NOT NULL,
        description TEXT
    )'''

    cursor.execute(sentencia_sql1)
    cursor.execute(sentencia_sql2)
    conexion.commit()
    conexion.close()
