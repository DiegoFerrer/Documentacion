
<!--            Numero Aleatorio                   -->

<script>
  	let getRandomNumber = (min,max) => {
  		return Math.floor(Math.random() * (max-min) + min)
  	}

    let array = ['diego', 'ricardo', 'otroName']
    array[getRandomNumber(0, array.length)] // mostrara un nombre de array segun indeice aleatorio que salga en la funcion
</script>