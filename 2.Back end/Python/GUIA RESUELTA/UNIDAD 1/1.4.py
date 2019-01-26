# A)
def prueba():
	base = input ("INGRESE LA BASE DEL RECTANGULO: ")
	altura = input ("INGRESE LA ALTURA DEL RECTANGULO: ")
	perimetro = 2 * (base + altura)
	area = base * altura
	print "el perimetro es de:  ", perimetro
	print "el area es de:  ", area
# B)
def prueba():
	radio = input ("ingrese el radio del circulo: ")
	perimetro = (2 * 3.14 * radio)
	area = 3.14 * (radio**2)
	print "el perimetro del circulo es:  ", perimetro
	print "el area del circulo es:  ", area
# C)
def prueba():
	import math
	cat1 = input ("Ingres valor de un cateto: ")
	cat2 = input ("ingrese valor de otro cateto: ")
	hipotenusa = math.sqrt((cat1**2) + (cat2**2))
	print "la hipotenusa es:  ", hipotenusa
# D)
def prueba():
	n1 = input ("INGRESE UN NUMERO: ")
	n2 = input ("INGRESE OTRO NUMERO: ")
	suma = n1 + n2
	resta = n1 - n2
	mult = n1 * n2
	div = n1 / n2
	print "La suma es de: : ",  suma
	print "La resta es de: ",  resta
	print "El producto es de:  ", mult
	print "La division es de: ",  div




