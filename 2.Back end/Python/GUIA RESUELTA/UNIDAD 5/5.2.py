def prueba():
	contador=0
	acumulador=0
	fin="si"
	while fin=="si":
                x=input("ingrese calificacion\n")
                if x>0:
                        contador=contador+1
                        acumulador=acumulador+x
                fin=raw_input("quiere ingresar otra califiacion? si o no\n")
        print "Su promedio es", (acumulador/contador),"puntos"        



        
		
