""" La clase Counter sirve para contar cosas """
from collections import Counter

votos = ["Voto1","Voto2","Voto1"]

final = Counter(votos)

# Numero de veces que ha salido un elemento
final["Elemento"]
# Añadir elementos a un counter
final.update(["ElementoNuevo"])
# Añadir varios a la vez
final.update(["ElementoNuevo"]:5) # Indicada que se va agregar 5 veces el elemento