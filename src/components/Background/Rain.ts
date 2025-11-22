import { random } from "../../utils/random";
import { Effect } from "./Effect";

interface Particle {
	x: number;
	y: number;
	l: number;
	xs: number;
	ys: number;
	d: number;
}

export class RainEffect extends Effect {
	maxParts = 250;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	constructor(width: number, height: number) {
		super(width, height);
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width) - 10,
				y: random(0, height) - 10,
				l: random(0.5, 2.5),
				xs: random(0, 1) - 5,
				ys: random(0.3, 3) + 6,
				d: random(0, Math.PI * 2),
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
			ctx.strokeStyle = "rgba(165,175,210,1)";
			ctx.moveTo(p.x, p.y);
			ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
			ctx.stroke();
			ctx.closePath();

			p.x += p.xs * timeFix;
			p.y += p.ys * timeFix;
			if (p.x > width + 800 || p.y > height) {
				p.x = random(0, width + 800);
				p.y = random(-100, 0);
			}
		}
		this.delay--;
		if (this.delay < 0) {
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.fillRect(0, 0, width, height);
			this.delay = random(800, 1500);
		}
	}
}
