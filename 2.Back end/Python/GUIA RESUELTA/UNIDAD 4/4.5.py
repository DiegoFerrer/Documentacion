def prueba():
	x=input("ingrese numero de mes\n")
	x2=input("ingrese año\n")
	if (x==1 or x==3 or x==5 or x==7 or x==8 or x==10 or x==12):
		print "Mes", x,"del año", x2,", tiene 31 dias"
	elif (x==4 or x==6 or x==9 or x==11):
		print "Mes", x,"del año", x2,", tiene 30 dias"
	elif (x==2 and x2%4==0 and x2%100==0 and x2%400==0):
		print "Mes", x,"del año", x2,", tiene 29 dias"
	elif (x==2 and x2%4==0 and x2%100!=0):
		print "Mes", x,"del año", x2,", tiene 29 dias"
	else:
		print "Mes", x,"del año", x2,", tiene 28 dias"


	





