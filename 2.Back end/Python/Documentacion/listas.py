lista = [1, 'hola', 1.3, True]
colors = ['rojo','verde','azul']

list((1,2,3,4)) # list() es un constructor para crear una lista, se le pasa una tupla de elementos
list(range(1, 10)) # crea una lista de elementos en ese rango

dir(lista) # para ver todos los metodos

print('caracter' in lista) # devuelve un boolean

lista.append('elemento') # Agrega un elemento al final
lista.extend('tupla o lista') # transforma una tupla o lista en individuales y los agrega al final
lista.insert(1, 'elemento') # inserta un elemento en una posicion
lista.pop('i') # elimina el ultimo elemento de la lista o se le puede pasar un indice y lo elimina
lista.index('elemento') # devuelve el index del elemento
lista.remove('elemento') # elimina un elemento especifico de la lista
lista.clear() # deja la lista vacia
lista.sort() # Ordena la lista alfabeticamente
lista.sort(reverse= True) # ordena la lista desde Z - A
