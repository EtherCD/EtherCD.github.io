export abstract class Effect {
	///@ts-ignore
	constructor(width: number, height: number) {}

	abstract render(ctx: CanvasRenderingContext2D, width: number, height: number): void;

	abstract registerSection(x: number, y: number, width: number): void;
}
