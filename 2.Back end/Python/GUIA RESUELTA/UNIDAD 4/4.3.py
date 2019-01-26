def prueba():
	n1=input("ingrese un numero\n")
	n2=input("ingrese otro numeron\n")
	for x in range(n1, n2+1):
		if (x%3==0 and x%5==0):
			print x, "Es multiplo de 3 y 5"
		elif x%3==0: 
			print x, "Es multiplo de 3"
		elif x%5==0:
			print x, "Es multiplo de 5"
		else:
			print x



	





