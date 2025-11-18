interface Particle {
	x: number;
	y: number;
	r: number;
	xs: number;
	ys: number;
}

function random(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export class SnowEffect {
	maxParts = 250;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	constructor(width: number, height: number) {
		this.maxParts = 350;
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width),
				y: random(-height, height),
				r: random(1.5, 3),
				xs: random(-0.5, 0.5),
				ys: random(1, 3),
			});
		}
	}

	render(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const time = Date.now();
		const delta = time - this.time;
		const timeFix = delta / (1000 / 60);
		this.time = time;
		for (var b = 0; b < this.particles.length; b++) {
			var p = this.particles[b];

			ctx.beginPath();
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();

			p.y += p.ys * timeFix;
			p.x += p.xs * timeFix + Math.sin(p.y / 30) * 0.3;

			if (p.y > height + p.r) {
				p.y = random(-50, -10);
				p.x = random(0, width);
			}
			if (p.x < -20 || p.x > width + 20) {
				p.x = random(0, width);
				p.y = random(-50, -10);
			}
		}
	}
}
