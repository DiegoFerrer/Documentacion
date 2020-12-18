
<!--  
	Los pipes son elementos que usamos en el DOM en el HTML junto con las directivas que van a tomar un elemento de entrada y le van a dar cierto formato y nos van a entregar una salida diferente.

Angular trae por defecto una cantidad de pipes para configuraciones y cambios comunes. Por ejemplo, cambiar las letras de mayúsculas a minúsculas, formatear fechas, etc.

Los pipes pueden tomar parámetros que le indiquemos.

Es posible que encadenemos pipes hasta que obtengamos el resultado que deseamos.

Además de los pipes que Angular tiene por defecto, es posible que nosotros hagamos nuevos.

	
| lowercase
| uppercase
| date
	date:short 
	date:medium 
	date:fulldate (fecha completa)
	date:shortime (la hora)
	date:"dd-mm-yyyy"
| number: number '1.2-2' (minimo 2 decimales y maximo 2)
| json (convierte todos los objetos a json)

 -->

<html>
	<li>{{lugar.nombre | lowercase }}</li>	

</html>

<script>
	
</script>