import { random } from "../utils/random.ts";
import { Effect } from "./Effect.ts";
import type {SectionBoundary} from "../stores/effect.ts";

interface Particle {
	x: number;
	y: number;
	l: number;
	s: number;
	d: number;
	t: number;
	xs: number;
	ys: number;
	temp: number;
	maxTemp: number;
}

export class LeafFallEffect extends Effect {

	maxParts = 50;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	images: HTMLImageElement[] = [];
	sections: Array<SectionBoundary> = [];

	constructor(width: number, height: number) {
		super(width, height);
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width) - 10,
				y: random(0, height) - 10,
				l: random(0.5, 2.5),
				s: random(40, 60),
				d: random(0, Math.PI * 2),
				t: Math.random() > 0.5 ? 1 : 0,
				xs: random(-0.5, 0.5),
				ys: random(0.2, 1),
				temp: 0,
				maxTemp: 0,
			});
		}
		const list = ["/assets/leaf.svg", "/assets/leaf-2.svg"];
		for (const i of list) {
			const img = new Image();
			img.src = i;
			this.images.push(img);
		}
	}

	render(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const time = Date.now();
		const delta = time - this.time;
		const timeFix = delta / (1000 / 60);
		this.time = time;
		for (var b = 0; b < this.particles.length; b++) {
			var p = this.particles[b];

			ctx.save();
			ctx.translate(p.x, p.y);
			const minAngle = Math.PI;
			const maxAngle = Math.PI * 2;

			const sway = Math.sin(p.y / 50);
			const t = (sway + 1) / 2;

			const angle = minAngle + t * (maxAngle - minAngle);

			ctx.globalAlpha = p.temp === 0 ? 1 : p.temp / p.maxTemp;
			ctx.rotate(angle);

			ctx.beginPath();
			ctx.drawImage(this.images[p.t], -p.s / 2, -p.s / 2, p.s, p.s);
			ctx.closePath();

			ctx.restore();

			if (p.temp > 0) {
				p.temp -= 0.1 * timeFix;
			} else {
				p.y += p.ys * timeFix;
				p.x += p.xs * timeFix + sway * 0.3;
			}


			if (p.temp === 0)
				for (let section of this.sections) {
					if (p.x > section.x && p.x < section.x + section.width && p.y > section.y - p.s / 2) {
						p.temp = random(6, 12);
						p.maxTemp = p.temp;
					}
				}

			if (p.y > height + p.s) {
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
