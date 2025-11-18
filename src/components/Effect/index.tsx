import { useEffect, useRef, useState } from "preact/hooks";
import { RainEffect } from "./Rain";

export const Effect = () => {
	const refs = useRef<HTMLCanvasElement | null>(null);
	const rain = useRef<RainEffect>();
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
	const onResize = () => {
		if (!refs.current!) return;

		const canvas = refs.current!;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	const draw = () => {
		requestAnimationFrame(draw);
		if (ctx) {
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			ctx.fillStyle = "#323339";
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
			rain.current!.render(ctx!, window.innerWidth, window.innerHeight);
		}
	};

	useEffect(() => {
		onResize();
		window.onresize = onResize;
		rain.current! = new RainEffect(window.innerWidth, window.innerHeight);
		setCtx(refs.current!.getContext("2d")!);
		requestAnimationFrame(draw);
	}, [refs.current]);
	return (
		<canvas
			ref={refs}
			style={{
				position: "fixed",
				left: 0,
				top: 0,
				margin: 0,
				padding: 0,
				zIndex: 0,
			}}
		></canvas>
	);
};
