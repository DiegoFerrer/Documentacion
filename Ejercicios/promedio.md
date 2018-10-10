
<!--            Promedio                   -->

<script>
	let promedio = array.reduce((a,b,i,array) => {
		b+=a // se suma a + b
		return i == array.length ? b/array.length : b;
	})
</script>