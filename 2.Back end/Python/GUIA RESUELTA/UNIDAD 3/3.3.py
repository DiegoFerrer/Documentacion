def asd():
        hora1=input("ingrese horas 1: ")
        min1=input ("ingrese minutos 1: ")
        seg1=input ("ingrese segundos 1: ")
        hora2=input ("ingrese horas 2: ")
        min2=input ("ingrese minutos 2: ")
        seg2=input ("ingrese segundos 2: ")
        da1=hora1*3600+min1*60+seg1
        da2=hora2*3600+min2*60+seg2
        segundos=da1+da2

        tiempoH=segundos/3600
        tiempoH1=tiempoH*3600
        minutos1=segundos-tiempoH1
        minutos=minutos1/60
        segundos1=minutos*60
        segundos2=minutos1-segundos1
        print tiempoH, "horas" , minutos, "minutos" , segundos2, "segundos"






