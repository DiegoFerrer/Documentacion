def factorial():
    n= input ("ingrese numero que desa calcular: ")
    fact=1
    for x in range(1, n+1):
        fact=fact*x
        print "el factorial de: ",n, "es",  fact

factorial()


