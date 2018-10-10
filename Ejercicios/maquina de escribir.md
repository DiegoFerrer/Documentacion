
<!--            Maquina de escribir                     -->

<script>
	let writing = srt => {
		let arrFromStr = str.split('');
		let i = 0;
		let printStr = setInterval(function(){
			if(arrFromstr[i] === ''){
				document.body.innerHTML += arrFromStr[i];
				document.body.innerHTML += arrFromStr[i + 1];
				i += 2
			} else {
				document.body.innerHTML += arrFromstr[i];
				i++
			}
			if(i === arrFromstr.length) {
				clearInterval(printStr);
				document.body.style.color = 'steelblue'
			}
		},300)
	}

	writing('HOLA PERRITOSSSS')
</script>