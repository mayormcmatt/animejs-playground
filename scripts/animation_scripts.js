const runReverse = (element, animation) => {
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
const rowOne = anime({
	targets: '.row-one .box--red',
	translateX: 800,
	scale: 2,
	duration: 800,
	// Custom bezier curve from anime.js site
	easing: [.91, -0.54, .29, 1.56],
	elasticity: 100,
	autoplay: false
});

const rowTwo = anime({
	targets: '.row-two .box--green',
	translateX: {
		value: 800,
		duration: 2000,
		elasticity: 100
	},
	translateY: {
		value: 65,
		duration: 800,
		delay: 200,
		elasticity: 100
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

var rowThree = anime.timeline({
	autoplay: false
});

rowThree
	.add({
		targets: '.row-three .box--gold',
		translateX: 800,
		rotate: 180,
		elasticity: 200
	})
	.add({
		targets: '.row-three .box--gold',
		translateX: 800,
		scale: 3,
		borderRadius: '50%',
		duration: 3000
	})
	.add({
		targets: '.row-three .box--gold',
		translateX: 0,
		scale: 1,
		borderRadius: '2px'
	})

// Run animations
runReverse('.row-one .box--red', rowOne);
runReverse('.row-two .box--green', rowTwo);
runReverse('.row-three .box--gold', rowThree);