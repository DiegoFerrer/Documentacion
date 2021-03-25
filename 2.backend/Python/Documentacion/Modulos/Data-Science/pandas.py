""" 
conda install pandas

Es la evolucion de numpy orientado al analisis de datos

pd.__version___


Crea un frame el cual contiene filas y columnas
"""

import pandas as pd 

variable = pd.DataFrame(
    {
        "nombre": ["Rick", "Jorge"],
        "apellidos": ["Grimes","Smith"],
        "edad": [50,14]
    } 
)
# Otra forma

variable2 = pd.DataFrame(
    [
        ["Rick","Grimes",60],
        ["Jorge","Smith",14]
    ], columns= ["nombre","apellidos","edad"]
)

# Tamaño de dataFrame. | devuelve filas y columnas
variable.shape

# Editar el indice
variable = variable.set_index('nameColumn')

# Ordenar un indice
variable.sort_index(ascending=False)

# Resetear index
variable.reset_index()

# leer un archivo csv
variable3= pd.read_csv('url')
# convertir archivo a csv
variable4= pd.to_csv('archivo')

variable4.head(4) # muestra las primera 4 filas
variable4.fail(5) # las ultimas 5
variable.describe() # te describe el archivo
variable.query('condiciones') # Filtrar datos segun condiciones

# Serie

serie = pd.Series([10,20,10])