interface Particle {
	x: number;
	y: number;
	r: number;
	t: number;
	d: number;
	s: number;
}

function random(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export class StarEffect {
	maxParts = 40;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	constructor(width: number, height: number) {
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width),
				y: random(0, height),
				r: random(5, 10),
				t: random(1000, 5000),
				d: random(-Math.PI * 2, Math.PI * 2),
				s: random(0, 1000),
			});
		}
	}

	render(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const time = Date.now();
		const delta = time - this.time;
		this.time = time;
		for (var b = 0; b < this.particles.length; b++) {
			var p = this.particles[b];

			ctx.globalAlpha = 1;
			p.s -= delta;
			const step = Math.PI / 5;
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.d);
			const inset = 3;
			ctx.beginPath();
			let r = p.s > 0 ? (-(p.s / 1000) + 1) * p.r : p.r;
			if (p.t < 1000) r = (p.t / 1000) * p.r;

			ctx.moveTo(0, -p.r);

			for (let i = 0; i < 5; i++) {
				ctx.lineTo(Math.cos(step * (2 * i + 1)) * r * inset, Math.sin(step * (2 * i + 1)) * r * inset);
				ctx.lineTo(Math.cos(step * (2 * i + 2)) * r, Math.sin(step * (2 * i + 2)) * r);
			}

			ctx.fillStyle = "rgba(213,196,161,0.3)";
			ctx.closePath();
			ctx.fill();
			ctx.restore();

			p.t -= delta;
			if (p.t <= 0) {
				p.y = random(0, height);
				p.x = random(0, width);
				p.t = random(2000, 10000);
				p.d = random(0, Math.PI * 2);
				p.s = 1000;
			}
		}
	}
}
