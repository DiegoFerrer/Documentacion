comidas = ['manzana', 'banana','queso']

# Ciclo for
for comida in comidas:
    if comida == 'queso':
        break
    elif comida == 'manzana':
        continue
    
# Ciclo while
contador = 4
while contador <=10:
    print('algo')
    contador += 1

# For in range (es un ciclo definido entre 2 intervalos incluyendolos)
for variable in range(2,9):
    print(variable * variable)
    # va a imprimir el cuadrado de 2, hasta 9
