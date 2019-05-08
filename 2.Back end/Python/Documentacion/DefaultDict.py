""" Nos permite crear diccionario que permiten devolver
un valor por defecto si una clave no existe """

from collections import defaultdict

sabores_helado = defaultdict(lambda: "Vainilla")

sabores_helado["Manuel"] = "Chocolate"

print(sabores_helado["Maria"]) # Por defecto va a devolver Vainilla

