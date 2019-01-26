def veloc():
    bytx=input ("ingrese bytes descargados: ")
    kb=bytx**1/3.0
    hora1=input("ingrese hora: ")
    min1=input ("ingrese minutos 1: ")
    seg1=input ("ingrese segundos 1: ")
    
    segundos=hora1*3600+min1*60+seg1
    tiempoH=segundos/3600
    tiempoH1=tiempoH*3600
    minutos1=segundos-tiempoH1
    minutos=minutos1/60
    segundos1=minutos*60
    segundos2=minutos1-segundos1
    print tiempoH, "horas" , minutos, "minutos" , segundos2, "segundos"

    vel= kb/segundos
    print "la velocidad de descarga es: ",vel, "kb por segundos",

veloc()
    
    
