# A)
def prueba():
	paraguas = 10
    	sombreros = 5
    	dinero = 1000
   	print "bartolome tiene", paraguas, "paraguas"
   	print "bartolome tiene", sombreros, "sombreros"
   	print "bartolome tiene", dinero, "Dinero"
  	print "Se vendieron 4 paraguas a 40$ c/u y 2 sombreros a $90 c/u"
    	paraguas = paraguas - 4
	sombreros = sombreros - 2
	dinero = dinero + 40*4 +90*2

	print "tiene", paraguas, "Paraguas"
	print "tiene", sombreros, "Sombreros"
	print "tiene", dinero, "Dinero"
# B)
def prueba():
	paraguas = 10
    	sombreros = 5
    	dinero = 1000
	precioparagua=90
	preciosombrero=40   	
	print "bartolome tiene", paraguas, "paraguas"
   	print "bartolome tiene", sombreros, "sombreros"
   	print "bartolome tiene", dinero, "Dinero"
  	print "Se vendieron 4 paraguas a 40$ c/u y 2 sombreros a $90 c/u"
    	paraguas = paraguas - 4
	sombreros = sombreros - 2
	dinero = dinero + (precioparagua*4)+( preciosombrero*4) 

	print "tiene", paraguas, "Paraguas"
	print "tiene", sombreros, "Sombreros"
	print "tiene", dinero, "Dinero"
# C)
def prueba():
	paraguas = 10
    	sombreros = 5
    	dinero = 1000
	precioparagua=90
	preciosombrero=40   	
	print "bartolome tiene", paraguas, "paraguas"
   	print "bartolome tiene", sombreros, "sombreros"
   	print "bartolome tiene", dinero, "Dinero"
  	print "Se vendieron 4 paraguas a 40$ c/u y 2 sombreros a $90 c/u"
    	paraguas = paraguas - 4
	sombreros = sombreros - 2
	dinero = dinero + (precioparagua*4)+( preciosombrero*4) 
               
	print  "Se va a vender la mitad de los sombreros y paraguas restantes"
	paraguas=paraguas-paraguas/2
	sombreros=sombreros-sombreros/2
	print "Se vendieron", paraguas,"el valor de la venta fue de", (paraguas*precioparagua),"Pesos"
	print "Se vendieron", paraguas,"el valor de la venta fue de: ", (sombreros*preciosombrero),"Pesos"
	dinero=dinero+(paraguas*precioparagua)+ (sombreros*preciosombrero)
	print "El dinero final es de : ", dinero,"Pesos"
