def costo_gb():
    cto_memo = input ("Ingrese el costo de una memoria RAM 4GB: ")
    cto_pen = input ("Ingrese el costo de un pendrive 16GB: ")
    cto_disk = input ("Ingrese el costo de un disco 2TB: ")
    cto_memo_giga = cto_memo / 4.0
    cto_pen_giga = cto_pen / 16.0
    cto_disk_giga = cto_disk / 1024.0
    print "El costo de 1GB en la memoria de 4GB es de: ", cto_memo_giga
    print "El costo de 1GB en un pendrive de 16GB es de: " , cto_pen_giga
    print "El costo de 1GB en un disco de 2TB es de: ",cto_disk_giga
    print "La memoria RAM de 4GB es ",cto_memo_giga / cto_pen_giga, "veces mas cara que el pendrive de 16GB"
    print "La memoria RAM de 4GB es ",cto_memo_giga / cto_disk_giga, "veces mas cara que el disco de 2TB"
    print "El pendrive de 16GB es ",cto_pen_giga / cto_disk_giga, "veces mas caro que el disco de 2TB"
	

	



        

