# Los sets son una coleccion que no tienen indice
# Conjunto de datos no repetidos

grupo_amigos = set({"Manuel","Juan","Ricardo"})

colors = {'Rojo','verde','azul'}
colors.add('violeta') # Lo agrega al incio porque no tienen indice
print('rojo' in colors)
colors.remove('azul')

colors.clear()

# Union de dos sets
VARIABLE = set1.union(set2)
# Interseccion  de sets
variable = set1.Interseccion(set2)
