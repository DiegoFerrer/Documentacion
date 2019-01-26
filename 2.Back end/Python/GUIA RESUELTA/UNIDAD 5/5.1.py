# A) 
def prueba():
	n1=input("ingrese un numero\n")   
	n2=input("ingrese otro numero\n")
	contador=1 #Contador de vueltas
	acumulador=0 #Acumulador de sumas 
	while n1!=contador:
		acumulador=acumulador+n1
		contador=contador+1
		print acumulador


# B)

def prueba():
	n1=input("ingrese un numero base\n")   
	n2=input("ingrese un exponente\n")
	contador=0 # como la multiplicaicon empieza por 1,contador empieza en 0
	acumulador=1 # empieza en 1 ,porque hace el producto de n1x1, luego toma valor de n1.
	while contador!=n2: # distinto de n2, porque es la cantidad de vueltas o la cantidad de veces que multiplica a n1
		acumulador=acumulador*n1
		contador=contador+1
		print acumulador

        
		
