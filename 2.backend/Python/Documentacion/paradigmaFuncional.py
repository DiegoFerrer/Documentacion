'''
Es un paradigma de funciones matematicas, nos enfocamos en que debemos hacer
    * Codigo mas preciso y mas corto
    * Uso de funciones
    * Codigo mas facil de entender y mantener
'''

# Funcion de una sola expresion
def duplicar(num):
    return num * 2
#! Funciones Lambda (anonimas)
duplicado = lambda num: num * 2 # para esto sirven las funciones anonimas para simplificar.

print(duplicado(4))
#-------------------------------------------------------------------------------

numeros = [1,2,3,4,5]

def duplicar2(lista):
    numeros_duplicados = []
    for numero in numeros:
        numeros_duplicados.append(numero * 2)
    return numeros_duplicados

#? Funcion Map
listaNueva = list(map(lambda num: num * 2 ,numeros))

#--------------------------------------------------------------------------------
numeros2 = [1,2,3,4,5]

def numeros_pares(lista):
    n_pares = []
    for numero in numeros2:
        if numero % 2 == 0:
            n_pares.append(numero)
    return n_pares

#* Funcion Filter
pares = list(filter(lambda numero: numero % 2 == 0, numeros2))

#--------------------------------------------------------------------------------
#! La funcion REDUCE, permite reducir una lista de varios elementos a 1 solo
from functools import reduce

lista1 = [2,4,6,8,10]
def unir(x,y):
    return x + y

reduce(unir,lista1)
