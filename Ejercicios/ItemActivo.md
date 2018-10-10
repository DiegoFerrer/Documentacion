
<!--            ITEM ACTIVO                     -->

<script>
	const getCurrentMenuItem = CointainerElement => {
		let url = location.href,
			links = [...CointainerElement.querySelectorAll('a')]
		links.map(link => {
			if (link.href === url) return link.classList.add('active')
		})
	}

	getCurrentMenuItem(document.getElementById('menu'))
</script>