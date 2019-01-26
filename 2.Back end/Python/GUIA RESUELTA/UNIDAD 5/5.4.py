>>> import random

>>> def prueba():
        print "He elegido un numero entre 1 y 50,intenta adivinarlo !!! "
	x=random.randrange (1,50)
        intentos=0
	while True:
		n=input("Adivine mi numero\n")
		if n>x:
			print "Has fallado,mi numero es menor"
			intentos=intentos+1
		elif n<x:
			print "Has fallado,mi numero es mayor"
			intentos=intentos+1
		elif n==x:
			print "Has acertado"
			break
	if intentos==3:
		print "Intentos fallidos: ", intentos
            

