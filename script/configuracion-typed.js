const typed = new Typed('.typed', {
	strings: [
		'<i class="producto">Pollos</i>',
		'<i class="producto">Carnes</i>',
		'<i class="producto">Pizzas</i>',
		'<i class="producto">Mariscos</i>'
		   ],
	stringsElement: '#cadenas-texto',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	smartBackspace: true,
	shuffle: false,
	backDelay: 2500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html'
});
