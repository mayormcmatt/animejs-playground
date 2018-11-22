var runReverse = (element, animation) => {
	document.querySelector(element)
		.addEventListener('click', () => {
			// console.log('clicked')
			animation.play();
			animation.finished
				.then(() => {
					animation.reverse();
				});
		});
}

// Animations
var rowOne = anime({
	targets: '.row-one .box--red',
	translateX: 800,
	scale: 2,
	duration: 800,
	// Custom bezier curve from anime.js site
	easing: [.91, -0.54, .29, 1.56],
	elasticity: 100,
	autoplay: false
});

var rowTwo = anime({
	targets: '.row-two .box--green',
	translateX: {
		value: 500,
		duration: 800
	},
	translateY: {
		value: 70,
		duration: 1000
	},
	rotate: {
		value: 720,
		duration: 2000,
		delay: 1000,
		easing: 'easeInOutSine'
	},
	scale: {
		value: 1.5,
		duration: 1800,
		delay: 1200,
		easing: 'easeInOutSine'
	},
	autoplay: false
});

runReverse('.row-one .box--red', rowOne);
runReverse('.row-two .box--green', rowTwo);