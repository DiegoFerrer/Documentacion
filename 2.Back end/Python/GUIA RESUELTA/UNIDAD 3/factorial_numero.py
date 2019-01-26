def factorial_numero():
    factorial= 1
    numero= input("ingrese un numero: ")
    for x in range (1, numero+1):
        factorial= factorial*x
        print numero, "-", factorial

factorial_numero()




