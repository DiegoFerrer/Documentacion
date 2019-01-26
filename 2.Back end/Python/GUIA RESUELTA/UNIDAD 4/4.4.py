def prueba():
	x=input("ingrese año\n")
	if (x%4==0 and x%100==0 and x%400==0):
		print x, "es bisiestos"
	elif (x%4==0 and x%100!=0):
		print x, "es bisiesto"
	else:
		print x, "no es bisiesto"



	





