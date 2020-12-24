import os
from getpass import getpass
from tabulate import tabulate # pip install tabulate
from conexion import * # importa el archivo conexion

conexion = conectar()
crear_tabla(conexion)

def menu():
    while True:
        print('Seleccione una de las siguientes opciones: ')
        print('\t1- Añadir contraseña')
        print('\t2- Ver todas las contraseñas')
        print('\t3- Ver contraseña especifica')
        print('\t4- Modificar contraseña')
        print('\t5- Eliminar contraseña')
        print('\t6- Salir contraseña')
        opcion = input('Ingrese una opcion: ')
        if opcion == '1':
            print('opcion 1')
        elif opcion == '2':
            print('opcion 2')
        elif opcion == '3':
            print('opcion 3')
        elif opcion == '4':
            print('opcion 4')
        elif opcion == '5':
            print('opcion 5')
        elif opcion == '6':
            break
        else:
            print('no ingreso una contraseña valida ')
menu()