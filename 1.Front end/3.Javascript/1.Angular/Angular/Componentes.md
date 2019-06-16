
<!--  
	Ciclo de vida de un componente
	LifeCycle Hooks

	Crear , renderizar, comprobar, destuir.
	
	NgOnChange,NgOnInit, NgAfterViewInit,NgDoCheck,NgOnDestroy




	Pasar datos a un componente: INPUT
	inportar en el componente que se quiere llamar el input de angular core

 -->

<html>
	<componente [datoEntrada1]="dato"></componente>

</html>

<script>
	@Input() datoEntrada1;


</script>