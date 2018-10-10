
<!--              Cuenta regresiva                   -->


<script>
	let countDown = ms => {
		let myCountDown = setInterval(function(){
			ms -= 1000
			let minutes = Math.floor(ms / (1000 * 60)),
				seconds = Math.floor((ms % (1000 * 60)) / 1000)
				document.body.innerHTML = `Quedan ${minutes} minutos y ${seconds}
				segundos `
			if (ms === 0) {
				clearInterval(myCountDown)
				document.body.innerHTML = 'Tiempo cumplido'
			}
		},1000)
	}
</script>