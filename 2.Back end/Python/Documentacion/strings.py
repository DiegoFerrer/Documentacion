myString = 'Hola Mundo'
nombre = 'Diego'

dir(myString) # te enseña que se puede hacer con un cierto tipo de dato
len(myString) # te emprime la longitud de la cadena

myString.upper() # Todo a Mayuscula
myString.lower() # Todo a minuscula
myString.swapcase() # una letra mayuscula, la siguiente en minuscula y sucesivamente.
myString.capitalize() # La primera letra de cada palabra a mayuscula
myString.replace('hola', 'Messi') # Reemplaza un texto
myString.count('o') # cuantas veces uso el caracter "o"
myString.startswith('hola') # te dice se empieza con la palabra (devuelve un BOOLEAN)
myString.endswith('palabra') # si termina con esa palabra (BOOLEAN)
myString.split() # divide la cadena (por defecto separa por caracter vacio)
myString.find('caracter') # devuelve la posicion del caracter encontrado
myString.index('e') # devuelve el indice del caracter
myString.isnumeric() # si es numerico
myString.isalpha() # si es alfanumerico 

print('mi nombre es' + nombre)
print(f'mi nombre es {nombre}')
