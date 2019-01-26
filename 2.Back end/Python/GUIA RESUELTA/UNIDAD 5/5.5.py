# Forma 1
def prueba():
	nro1=input("Ingrese un numero: \n")
	nro2=input("Ingrese otro numero: \n")
	fin=0
	while fin==0:
		resto=nro1%nro2
		if(resto==0):
			fin=1
		else:
			nro1=nro2
			nro2=resto
	print "Maximo comun divisor ",nro2


# Forma 2	
def mcd():
        a=input("Ingrese un numero: \n")
	b=input("Ingrese otro numero: \n")
	while b != 0:
                a, b = b, a % b
        print "Maximo comun divisor", a

