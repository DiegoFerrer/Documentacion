def prueba():
	capital = input ("ingres dinero: ")
	tasa = input ("ingrese tasa anual: ")
	tiempo = input ("ingrese cantidad de a�os: ")
	resultado = ((1 + tasa / 100.0) ** tiempo) * capital
	print "monto final es: ",resultado




