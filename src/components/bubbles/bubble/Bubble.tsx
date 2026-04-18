export default function Bubble(
	canvas: HTMLCanvasElement,
	nb: number = -1
): () => void {
	const ctx = canvas.getContext('2d')!,
		colour = [
			`rgba(126, 246, 255, 0.99)`,
			`rgba(201, 255, 151, 0.99)`,
			`rgba(127, 253, 247, 0.99)`,
		];

	canvas.width = document.body.scrollWidth;
	canvas.height = window.innerHeight;
	canvas.style.display = 'block';
	ctx!.lineWidth = 0.3;
	ctx!.strokeStyle = colour[0];

	const windowSize = window.innerWidth;
	let dots: { nb: any; array: any; distance?: number; d_radius?: number };

	if (nb !== -1) {
		dots = {
			nb: nb,
			distance: 70,
			d_radius: 300,
			array: [],
		};
	} else if (windowSize > 1600) {
		dots = {
			nb: 600, // number of particles
			// nb: 2,
			distance: 70, // max distance between particles for them to link
			d_radius: 300, // radius from mouse location that particles will link
			array: [],
		};
	} else if (windowSize > 1300) {
		dots = {
			nb: 575,
			// nb: 2,
			distance: 60,
			d_radius: 280,
			array: [],
		};
	} else if (windowSize > 1100) {
		dots = {
			nb: 500,
			// nb: 200,
			distance: 55,
			d_radius: 250,
			array: [],
		};
	} else if (windowSize > 800) {
		dots = {
			nb: 300,
			// nb: 2,
			distance: 0,
			d_radius: 0,
			array: [],
		};
	} else if (windowSize > 600) {
		dots = {
			nb: 200,
			distance: 0,
			d_radius: 0,
			array: [],
		};
	} else {
		dots = {
			nb: 100,
			distance: 0,
			d_radius: 0,
			array: [],
		};
	}

	class Dot {
		x: number;
		y: number;
		vx: number;
		vy: number;
		radius: number;
		colour: string;
		switch: number;

		constructor() {
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;

			this.vx = (-0.5 + Math.random()) / (Math.random() > 0.5 ? 4 : 5);
			this.vy = (-0.5 + Math.random()) / (Math.random() > 0.5 ? 4 : 5);

			this.radius = Math.random() * 0.75;

			const clr = colour[Math.floor(Math.random() * colour.length)];

			this.colour = `${clr.substring(0, clr.length - 3)}${Math.round(40 + Math.random() * 49)})`;
			this.switch = Math.random() > 0.5 ? 1 : -1;
		}

		create() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			ctx.fillStyle = this.colour;
			ctx.fill();
		}

		animate() {
			// dont animate the first dot, it will follow mouse
			for (let i = 0; i < dots.nb; i++) {
				const dot = dots.array[i];

				if (dot.y < 0 || dot.y > canvas.height) {
					dot.vx = dot.vx;
					dot.vy = -dot.vy;
				} else if (dot.x < 0 || dot.x > canvas.width) {
					dot.vx = -dot.vx;
					dot.vy = dot.vy;
				}
				dot.x += dot.vx;
				dot.y += dot.vy;
			}
		}
	}

	function initDots() {
		for (let i = 0; i < dots.nb; i++) {
			dots.array.push(new Dot());
		}
	}

	function createDots() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < dots.nb; i++) {
			var dot = dots.array[i];
			dot.create();
		}

		dot.animate();
	}

	initDots();
	const draw = setInterval(createDots, 10000 / 330);
	setInterval(() => {
		for (let i = 1; i < dots.nb; i++) {
			const dot = dots.array[i];

			const old_color = dot.colour;
			const transparency = parseInt(
				old_color.substring(old_color.length - 3, old_color.length - 1)
			);
			if (dot.switch > 0) {
				if (transparency < 99) {
					dot.colour = `${old_color.substring(0, old_color.length - 3)}${transparency + 1})`;
				} else {
					dot.switch = -1;
					dot.colour = `${old_color.substring(0, old_color.length - 3)}98)`;
				}
			} else {
				if (transparency > 40) {
					dot.colour = `${old_color.substring(0, old_color.length - 3)}${transparency - 1})`;
				} else {
					dot.switch = 1;
					dot.colour = `${old_color.substring(0, old_color.length - 3)}41)`;
				}
			}
		}
	}, 1000 / 33);

	window.onresize = function () {
		clearInterval(draw);
		Bubble(canvas);
	};

	return () => clearInterval(draw);
}
