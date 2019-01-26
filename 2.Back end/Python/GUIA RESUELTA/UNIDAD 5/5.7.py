def prueba():
    contador=0
    acumulador=0
    while True:
        fin=input("ingrese un numero\n")
    if fin==-1:
        contador=contador+1
        acumulador=acumulador-1
        break
    else:
        contador=contador+1
        acumulador=acumulador+fin
        print "Se ingresaron", contador,"Numeros"
        print "La suma total de los numeros es de: ", acumulador


