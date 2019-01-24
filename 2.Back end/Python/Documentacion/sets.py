# Los sets son una coleccion que no tienen indice

colors = {'Rojo','verde','azul'}
colors.add('violeta') # Lo agrega al incio porque no tienen indice
print('rojo' in colors)
colors.remove('azul')

colors.clear()