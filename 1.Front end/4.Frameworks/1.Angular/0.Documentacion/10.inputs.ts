/*
	# Comunicacion del componente PADRE --> HIJO	
	# El decorador va en el hijo
	# inportar en el componente que se quiere llamar el input de angular core
	# Los componentes deben ser declarados en el MODULO a utilizar
	# El componente hijo define un atributo prop para mandar

*/

@Input() 
datoEntrada1;

<html>
	<componenteHijo [datoEntrada1]="dato"></componente>
</html>