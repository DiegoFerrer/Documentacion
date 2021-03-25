import sys
import numpy as np 

matriz = np.array([4.5, ])

# Dimensiones de una matriz(array)
matriz.ndim
# Averiguar forma vectorial de una matriz(array)
matriz.shape

# crear una matriz de 0
np.zeros((filas,columnas))
# crear matriz de 1
np.ones((filas,columnas))

# Seleccionar elemento de un array

matriz2 = np.array([
    [1,6,11],
    [2,7,12],
    [3,14,18]
])

matriz2[:,1] # Para todos los elementos, la segunda posicion (1 es el indce del segundo elemento)

# Crear un vector con un rango 
arrayNuevo = np.arange(15,57)

# Array al reves
arrayNuevo[::-1]

# Crear matriz diagonal con numeros 
np.diag(arrayNuevo([3,2,1]))