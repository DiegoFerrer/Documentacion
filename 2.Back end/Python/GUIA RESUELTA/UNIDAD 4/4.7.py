def prueba():
	i=input("ingrese numero de dia\n")
	x=input("ingrese numero de mes\n")
	x2=input("ingrese año\n")
	if (x==12 and i==31):
		print 1, 1, x2+1
	elif (x==1 or x==3 or x==5 or x==7 or x==8 or x==10 or x==12 and i<31):
		print i+1, x, x2
	elif (x==1 or x==3 or x==5 or x==7 or x==8 or x==10 and i==31):
		print 1, x+1, x2
	elif (x==4 or x==6 or x==9 or x==11 and i<30):
		print i+1, x, x2
	elif (x==4 or x==6 or x==9 or x==11 and i==30):
		print 1, x+1, x2
	elif (x==2 and x2%4==0 and x2%100==0 and x2%400==0 and i<29):
		print i+1, x, x2
	elif (x==2 and x2%4==0 and x2%100==0 and x2%400==0 and i==29):
		print 1, x+1, x2
	elif (x==2 and x2%4==0 and x2%100!=0 and i<29):
		print i+1, x, x2
	elif (x==2 and x2%4==0 and x2%100!=0 and i==29):
		print 1, x+1, x2
	elif (x==2 and i<28):
		print i+1, x, x2
	elif (x==2 and i==28):
		print 1, x+1, x2
	else:
		print "fecha invalida"
