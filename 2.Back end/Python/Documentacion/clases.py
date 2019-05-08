""" 
Python es orientado a objetos
Las clases Son "plantillas" que fabrican objetos.
"""

class NameClass:
    def metodo1(self) : # Todos los metodos toman self como referencia a la clase
    def metodo2(self) :


""" Para que los objetos que se crean no sean todos iguales, se puede usar el metodo especial __init__ que se ejecuta cuando se crea el objeto de una clase"""


class CocheConColor:
    def __init__(self, color):
        self.color = color # esto es un atributo

""" Herencia de clases 
Cuando se crean clases, pueden heredar funcionaldiades genericas de otras clases.

"""
class nuevaClase(CocheConColor): #Esto indica que va a heredad las propiedades de CocheConColor
    