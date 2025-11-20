interface Particle {
	x: number;
	y: number;
	r: number;
	t: number;
}

function random(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export class StarEffect {
	maxParts = 250;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	constructor(width: number, height: number) {
		this.maxParts = 350;
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width),
				y: random(0, height),
				r: random(1.5, 3),
				t: random(0, 1000),
			});
		}
	}

	render(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const time = Date.now();
		const delta = time - this.time;
		this.time = time;
		for (var b = 0; b < this.particles.length; b++) {
			var p = this.particles[b];

			ctx.beginPath();
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.globalAlpha = p.t / 1000;
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();

			p.t -= delta;
			if (p.t <= 0) {
				p.y = random(0, height);
				p.x = random(0, width);
				p.t = random(1000, 3000);
			}
		}
	}
}
