<!-- 
    Elastic compute cloud

    Instancias  
        * t4.small
        * m5.medium
        * r6a.xlarge

        Primera letra = clase de familia
        numero que acompaña a la letra = representa la generacion , por ejemplo 4ta generacion de esa familia
        siguiente letra (no todas la tienen) = version mejorada de esa generacion
        ? despues del punto => tamaño de computo

        todo EJEMPLO = t4.small | dentro de la familia t, generacion 4 un tamaño de computo small(2 virtual cpu, 4 de ram ,etc)

        Tipos de precio
        * On Demand: Paga por lo que consume
        * Spot instances: Subasta al mejor postor
        * Reserved isntances
            ? Standars RI: contrato minimo de 1 año, con descuento | te las reserva amazon por x cantidad de tiempo
            ? convertible  RI: te permiten reducir o aumentar la capacidad de computo 
            ? Scheluded RI: Reservar instancias por ventanas de tiempo, tipo por viernes sabado y domingo
        * Saving Plans
        * Dedicated Host: Servidor dedicado para ti

        Launch Template
            ? Es una plantilla de lanzamiento que te permite automatizar la creacion de una instancia EC2
            ? es un setup predefinido de una instancia
        
        AutoScaling Gruop
            ? Escalar a demanda de forma horizontal crecer o decrecer los recursos

        ELB
            ? Elastic Load Balanced
            ? Distribuye la carga de recursos de manera equitativa entre las instancias
            ! Minimo tenes que tener 2 zonas de disponibilidad, para que pueda dividir la carga entre ambas
            Existen 3 tipos de balanceadores
                * classic: Pronto en desuso, Aplicable para TCP y HTTP
                * ALB (Aplication Load Balancer): HTTP/HTTPs [Ip Elastica]
                * NBL (Network Load Balancer): Aplicable para TCP, alto rendimiento [Ip Fija]
                    Para respuestas super rapidas, en milisegundos   


-->