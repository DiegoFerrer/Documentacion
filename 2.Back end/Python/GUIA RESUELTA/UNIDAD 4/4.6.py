def prueba():
	i=input("ingrese numero de dia\n")
	x=input("ingrese numero de mes\n")
	x2=input("ingrese año\n")
	if ((x==1 or x==3 or x==5 or x==7 or x==8 or x==10 or x==12) and i<=31):
		print "El dia", i,"del mes", x,"del año", x2,", es una fecha valida"
	elif ((x==4 or x==6 or x==9 or x==11) and i<=30):
		print "El dia", i,"del mes", x,"del año", x2,", es una fecha valida"
	elif (x==2 and x2%4==0 and x2%100==0 and x2%400==0 and i<=29):
		print "El dia", i,"del mes", x,"del año", x2,", es una fecha valida"
	elif (x==2 and x2%4==0 and x2%100!=0 and i<=29):
		print "El dia", i,"del mes", x,"del año", x2,", es una fecha valida"
	elif (x==2 and i<=28):
		print "El dia", i,"del mes", x,"del año", x2,", es una fecha valida"
	else:
		print "El dia", i,"del mes", x,"del año", x2,", es una fecha invalida"



prueba()





