import { useEffect, useRef, useState } from "preact/hooks";
import { SnowEffect } from "./Snow";

const image = new Image();
image.src = "/background.png";
export const Background = () => {
	const refs = useRef<HTMLCanvasElement | null>(null);
	const rain = useRef<SnowEffect>();
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
			const width = window.innerWidth;
			const height = window.innerHeight;

			// const baseW = 1920;
			// const baseH = 1080;

			// const scale = Math.max(width / baseW, height / baseH);

			// const drawW = baseW * scale;
			// const drawH = baseH * scale;

			// const dx = (width - drawW) / 2;
			// const dy = (height - drawH) / 2;

			// ctx.clearRect(0, 0, width, height);
			// ctx.drawImage(image, dx, dy, drawW, drawH);
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = "#323339";
			ctx.fillRect(0, 0, width, height);
			rain.current!.render(ctx!, width, height);
		}
	};

	useEffect(() => {
		onResize();
		window.onresize = onResize;
		rain.current! = new SnowEffect(window.innerWidth, window.innerHeight);
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
				zIndex: -1,
			}}
		></canvas>
	);
};
