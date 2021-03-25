
<!--               Geolocation                 -->

<html>
<body>
 	<div id="google_canvas"></div>
	<script src="http://maps.googleapis.com/maps/api/js?&sensor=true"></script>
</body>
</html>

<style>
	
html,body{
width: 100%;
height: 100%;
padding: 0;
margin: 0;
}
#google_canvas{
height: 100%;
width: 100%;
margin: 0;
}
</style>

<script>
	let marcador_tiempo_real;
	let mapa;
	
	google.maps.event.addDomListener(window,'load',dibujarMapa);
	function dibujarMapa(){
		var opcionesMapa = {
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		mapa = new google.maps.Map(document.getElementById('google_canvas'),opcionesMapa);
		navigator.geolocation.getCurrentPosition(function(posicion){
			var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);

			var marcador = new google.maps.Marker({
				map: mapa,
				position:geolocalizacion,
				visible: true
			});
			marcador_tiempo_real = new google.maps.Marker({
				map: mapa,
				position:geolocalizacion,
				visible: true
			});
			mapa.setCenter(geolocalizacion);
			navigator.geolocation.watchPosition(actualizarPosicion,function(error){console.log(error);},{maximumAge: 0});
		},function(error){
			console.log(error);
		});
	}
	
	function actualizarPosicion(posicion){
		var geolocalizacion = new google.maps.LatLng(posicion.coords.latitude,posicion.coords.longitude);
		marcador_tiempo_real.setPosition(geolocalizacion);
		mapa.setCenter(geolocalizacion);
	}
</script>

<script>
	// Es un objeto con tres metodos

	.clearWatch()
	.watchPosition()
	.getCurrentPosition(success, error, options)
</script>