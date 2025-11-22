import { random } from "../../utils/random";
import { Effect } from "./Effect";

interface Particle {
	x: number;
	y: number;
	r: number;
	t: number;
	d: number;
	s: number;
}

export class StarEffect extends Effect {
	maxParts = 40;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	constructor(width: number, height: number) {
		super(width, height);
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width),
				y: random(0, height),
				r: random(3, 10),
				t: random(1000, 5000),
				d: random(0, Math.PI * 2),
				s: random(0, 1000),
			});
		}
	}

	render(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const time = Date.now();
		const delta = time - this.time;
		this.time = time;

		// https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
		function drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
			var rot = (Math.PI / 2) * 3;
			var x = cx;
			var y = cy;
			var step = Math.PI / spikes;

			ctx.beginPath();
			ctx.moveTo(cx, cy - outerRadius);
			for (let i = 0; i < spikes; i++) {
				x = cx + Math.cos(rot) * outerRadius;
				y = cy + Math.sin(rot) * outerRadius;
				ctx.lineTo(x, y);
				rot += step;

				x = cx + Math.cos(rot) * innerRadius;
				y = cy + Math.sin(rot) * innerRadius;
				ctx.lineTo(x, y);
				rot += step;
			}
			ctx.lineTo(cx, cy - outerRadius);
			ctx.closePath();
			ctx.fillStyle = "rgba(213,196,161,0.3)";
			ctx.fill();
		}

		for (var b = 0; b < this.particles.length; b++) {
			var p = this.particles[b];

			ctx.globalAlpha = 1;
			p.s -= delta;
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.d);
			ctx.beginPath();
			let r = p.s > 0 ? (-(p.s / 1000) + 1) * p.r : p.r;
			if (p.t < 1000) r = (p.t / 1000) * p.r;

			drawStar(0, 0, 5, r * 3, r);

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
