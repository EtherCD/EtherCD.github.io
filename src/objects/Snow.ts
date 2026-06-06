import { random } from "../utils/random.ts";
import { Effect } from "./Effect.ts";
import type {SectionBoundary} from "../stores/effect.ts";

interface Particle {
	x: number;
	y: number;
	r: number;
	xs: number;
	ys: number;
	temp: number;
}

export class SnowEffect extends Effect {
	maxParts = 250;
	particles: Particle[] = [];
	time = Date.now();
	sections: Array<SectionBoundary> = [];

	constructor(width: number, height: number) {
		super(width, height);
		this.maxParts = 400;
	}

	init(width: number, height: number) {
		this.particles = [];
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width),
				y: random(-height, height),
				r: random(1.5, 3),
				xs: random(-0.5, 0.5),
				ys: random(1, 3),
				temp: 0,
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
			ctx.globalAlpha = p.temp === 0 ? 1 : p.temp;
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();

			if (p.temp > 0) {
				p.temp -= 0.1 * timeFix;
			} else {
				p.y += p.ys * timeFix;
				p.x += p.xs * timeFix + Math.sin(p.y / 30) * 0.3;
			}


			if (p.temp === 0)
				for (let section of this.sections) {
					if (p.x > section.x && p.x < section.x + section.width && p.y > section.y - p.r) {
						p.temp = random(2, 4);
					}
				}

			if (p.y > height + p.r) {
				p.y = random(-50, -10);
				p.x = random(0, width);
			}
			if (p.x < -20 || p.x > width + 20) {
				p.x = random(0, width);
				p.y = random(-50, -10);
			}
			if (p.temp < 0) {
				p.x = random(0, width);
				p.y = random(-50, -10);
				p.temp = 0;
			}
		}
	}

	registerSection(x: number, y: number, width: number): void {
		this.sections.push({
			x,
			y,
			width
		})
	}
}
