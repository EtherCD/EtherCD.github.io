import { random } from "../utils/random.ts";
import { Effect } from "./Effect.ts";
import type {SectionBoundary} from "../stores/effect.ts";

interface Particle {
	x: number;
	y: number;
	width: number;
	height: number;
	speed: number;
	alpha: number;
	temp: number;
	triggered: boolean;
}

export class RainEffect extends Effect {
	maxParts = 250;
	maxSpray = 2;
	particles: Particle[] = [];
	delay = random(300, 500);
	time = Date.now();
	sections: Array<SectionBoundary> = [];

	constructor(width: number, height: number) {
		super(width, height);
		if (document.body.clientWidth < 1000) {
			this.maxParts = 100;
			this.maxSpray = 1;
		}
		for (var a = 0; a < this.maxParts; a++) {
			this.particles.push({
				x: random(0, width) - 10,
				y: random(0, height) - 10,
				width: random(2, 5),
				height: random(10, 20),
				speed: random(15, 30),
				alpha: random(0.5, 1),
				temp: 0,
				triggered: false,
			});
		}
	}

	render(ctx: CanvasRenderingContext2D, width: number, height: number) {
		const time = Date.now();
		const delta = time - this.time;
		const timeFix = delta / (1000 / 60);
		this.time = time;
		for (let i = 0; i < this.particles.length; i++) {


			const p = this.particles[i];

			if (p === undefined) {
				continue
			}

			ctx.beginPath();
			ctx.fillStyle = "rgba(165,175,210,1)";
			if (p.alpha > 0)
				ctx.globalAlpha = p.alpha;
			ctx.rect(p.x, p.y, p.width, p.height);
			ctx.fill();
			ctx.closePath();

			if (p.temp !== 0) {
				p.x -= Math.cos(p.temp) * timeFix  * p.speed;
				p.y -= Math.sin(p.temp) * timeFix * p.speed;
				p.alpha -= 0.01 * timeFix;
			} else {
				p.y += p.speed * timeFix;
			}

			if (p.temp === 0)
				for (let section of this.sections) {
					if (p.x > section.x && p.x < section.x + section.width && p.y > section.y) {
						p.height += (section.y - p.y) * timeFix;
						if (!p.triggered)
							for (let i = 0; i < this.maxSpray; i++) {
								const size = random(2, 5);

								this.particles.push({
									x: p.x,
									y: p.y - size,
									width: size,
									height: size,
									speed: random(1, 2),
									alpha: random(0.2, 1),
									temp: random((5 * Math.PI) / 6, Math.PI / 6),
									triggered: false,
								})
							}
						p.triggered = true;

					}
				}
			if (p.temp === 0)
				if (p.x > width || p.y > height || p.alpha <= 0 || p.height <= 0) {
					p.x = random(0, width);
					p.y = random(-100, 0);
					p.height = random(10, 20);
					p.triggered = false;
				}
			if (p.alpha <= 0) {
				delete this.particles[i];
			}
		}
		this.delay--;
		if (this.delay < 0) {
			ctx.fillStyle = "rgba(255,255,255,0.6)";
			ctx.fillRect(0, 0, width, height);
			this.delay = random(800, 1500);
		}
	}

	registerSection(x: number, y: number, width: number): void {
		console.log(x, y, width);
		this.sections.push({
			x,
			y,
			width
		});
	}
}
