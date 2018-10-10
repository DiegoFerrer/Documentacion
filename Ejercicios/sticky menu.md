
<!--            Menu Sticky                   -->

<script>
	const getDistanceTop = element => {
		return element.getBoundingClientRect().top + window.pageYOffset;
		// retorna el top del elemento + la distancia del windows
	}

	const menu = document.getElementById('menu')

	let menuDistanceTop;

	if(menu) menuDistanceTop = getDistanceTop(menu)

	window.addEventListene('scroll', () => {
		let windowScroll = window.pageYOffset
		if (windowScroll > menuDistanceTop) {
			menu.classList.add('sticky')
		} else {
			menu.classList.remove('sticky')
		}
	})
</script>