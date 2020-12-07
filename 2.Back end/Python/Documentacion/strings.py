myString = 'Hola Mundo'
nombre = 'Diego'
apellido = 'Ferrer'

dir(myString) # te enseña que se puede hacer con un cierto tipo de dato
len(myString) # te emprime la longitud de la cadena

""" Operaciones con Strings """
str(4) # Convierte numero a string
numero_string = "24"
int(numero_string) # string a entero
float(numero_string) # string a flotante
myString.upper() # Todo a Mayuscula
myString.lower() # Todo a minuscula
myString.swapcase() # una letra mayuscula, la siguiente en minuscula y sucesivamente.
myString.capitalize() # La primera letra de cada palabra a mayuscula
myString.replace('hola', 'Messi') # Reemplaza un texto
myString.count('o') # cuantas veces uso el caracter "o"
myString.strip('') # elimina todos los caracteres al inicio y al final
myString.startswith('hola') # te dice se empieza con la palabra (devuelve un BOOLEAN)
myString.endswith('palabra') # si termina con esa palabra (BOOLEAN)
myString.split() # divide la cadena (por defecto separa por caracter vacio)
myString.find('caracter') # devuelve la posicion del caracter encontrado
myString.index('e') # devuelve el indice del caracter
myString.isnumeric() # si es numerico
myString.isalpha() # si es alfanumerico 


""" Interpolacion """
print('mi nombre es ' + nombre)
print(f'mi nombre es {nombre} {apellido}')
# Metodo format
print("Hola me llamo {}".format(nombre))
