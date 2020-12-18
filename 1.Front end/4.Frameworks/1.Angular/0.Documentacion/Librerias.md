<!--  
	# Libreria Angular Google maps | https://angular-maps.com/
		npm install @agm/core --save

		import { AgmCoreModule } from '@agm/core';

		imports:[
			AgmCoreModule.forRoot({
				apiKey: 'YourKey'
			})
		]
	

 -->
<!-- 

-->

<html>
	<amg-map [latitude]="lat" [longitude]="lng"> 
		<agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
	</amg-map>

</html>

<style>
	agm-map {
		height: 300px;
	}
</style>

<script>
	// Sacarlas de google maps
	lat:number = 0;
	lng:number = 0;
</script>