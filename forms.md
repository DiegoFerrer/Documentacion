
<!--  
	import formsModule de angular forms

 -->
<!-- 

-->

<html>
	<form (submit)="metodo()" #nameId></form>
	<form>
		<input [(ngModel)]="name">
	</form>

</html>

<script>	
  name: 'Ricard'
</script>