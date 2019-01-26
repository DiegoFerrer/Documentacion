# A)
def prueba():
	while True:
		contra=raw_input("Ingrese contraseña\n")
		if contra=="hola":
			print "contrseña correcta"
			print " Ha Acertados,Saludos"
			break
		elif contra!="hola":
			print "Contraseña incorrecta,intente de nuevo"

# B)
def prueba():
        intentos=0
	while intentos!=3:
		contra=raw_input("Ingrese contraseña\n")
		if contra=="hola":
			print "contrseña correcta"
			print " Ha acertado,saludos"
			break
		elif contra!="hola":
			print "Contraseña incorrecta,intente de nuevo"
			intentos=intentos+1			
	if intentos==3:
		print "Intentos fallidos: ", intentos
# C)
import time

def prueba():
    intentos=0
    tiempo=3
    while intentos!=3:
	contra=raw_input("Ingrese contraseña\n")
	if contra=="hola":
		print "contrseña correcta"
		print " Ha acertados,saludos"
		break
	elif contra!="hola":
		print "Contraseña incorrecta,intente de nuevo"
		intentos=intentos+1			
		time.sleep(tiempo)
		tiempo=tiempo+1
        if intentos==3:
                print "Intentos fallidos: ", intentos
