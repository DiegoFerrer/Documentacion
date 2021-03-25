<!--NavBar --> 
<nav class="navbar"></nav>

<!--boton toggle --> 
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<!--navBar fondos --> 
<nav class="navbar navbar-inverse bg-inverse"></nav> <!--Fondo negro --> 
<nav class="navbar navbar-inverse bg-primary"></nav> <!--Fondo azul --> 
<nav class="navbar navbar-light"></nav> <!--Fondo light --> 

 <!--Logo --> 
<a class="navbar-brand" href="#">
	<img src="svg" width="30" height="30" class="d-inline-block align-top" alt=""> Bootstrap
</a>
 <!--Navegacion enlaces --> 
<div class="navbar-nav">
  <a class="nav-item nav-link active" href="#">Home</a>
  <a class="nav-item nav-link" href="#">Features</a>
  <a class="nav-item nav-link" href="#">Pricing</a>
  <a class="nav-item nav-link disabled" href="#">Disabled</a>
</div>

<!--toggle navigation -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
	<a class="navbar-brand" href="#">
		<img src="svg" width="30" height="30" class="d-inline-block align-top" alt=""> Bootstrap
	</a>
	<button class="navbar-toggler" data-toggle="collapse" data-target="#nav">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="nav"> <!--para que collapse en movile -->
		<ul class="navbar-nav">
			<li class="nav-item"><a href="" class="nav-link"></a></li>
		</ul>
	</div>
	
</nav>