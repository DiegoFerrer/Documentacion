''' 
Los objetos no son mas que modelos de la vida real, por ejemplo un auto
Que tiene propiedades y atributos.

Tenemos 2 OBJETOS autos, con atributos de
    * Marca = Ford, Chevrolet
    * Color = Azul, Rojo
    * Modelo = Fiesta, Onix

y metodos de:
    * Encender()
    * frenar()
    * acelerar()
'''
#? Tenemos 2 objetos que comparten mismos atributos y metodos
#todo, Como podemos hacer para crear objetos con propiedades iguales pero distintos valores?
#! Con CLASES:

class Usuario:
    def __init__(self,nombre,edad): # es el primer metodo en ejecutarse, constructor en otros. el self es como el this, hace referencia la clase
        #! atributos de la clase
        self.nombre = nombre
        self.edad = edad

        #todo, methods
    def registrar(self):
        print(f'El usuario:{self.nombre} ha sido registrado')
    
    def consultarTipo(self):
        pass


# el objeto es creado cuando se INSTANCIA una clase
usuario = Usuario('diego',24)
print(usuario.nombre)

#*---------------- Herencia -------------------------
# Crear una clase a partir de otra clase
class Cliente(Usuario):
    # si quiero que mi clase tenga los atributos o metodos de otra clase:
    def __init__(self,nombre,edad,compras):
        super().__init__(nombre,edad)
        self.compras = compras
    #! Encapsulamiento,al anteponer __ ,lo declaras PRIVADO
    def __ver_compras(self):
        pass
    #! Polimorfismo, usamos el mismo metodo pero distinto contenido
    def consultarTipo(self):
        'crack'

cliente = Cliente('diego',26,300)
cliente.ver_compras()

# Herencia multiple
class Vendedor(Usuario,Persona):
#*-------------------------------------------------------
