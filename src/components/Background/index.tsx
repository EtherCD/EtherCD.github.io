import { useEffect, useRef, useState } from "preact/hooks";
import { StarEffect } from "./Stars";

const image = new Image();
image.src = "/background.svg";
export const Background = () => {
	const refs = useRef<HTMLCanvasElement | null>(null);
	const rain = useRef<StarEffect>();
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
	const onResize = () => {
		if (!refs.current!) return;

		const canvas = refs.current!;
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
	};

	const draw = () => {
		requestAnimationFrame(draw);
		if (ctx) {
			const width = document.body.clientWidth;
			const height = document.body.clientHeight;
			ctx.clearRect(0, 0, width, height);
			// ctx.fillStyle = "#282828";
			rain.current!.render(ctx!, width, height);
		}
	};

	useEffect(() => {
		onResize();
		window.onresize = onResize;
		rain.current! = new StarEffect(document.body.clientWidth, document.body.clientHeight);
		setCtx(refs.current!.getContext("2d")!);
		requestAnimationFrame(draw);
	}, [refs.current]);
	return (
		<>
			<canvas
				ref={refs}
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					margin: 0,
					padding: 0,
					zIndex: -1,
				}}
			></canvas>
		</>
	);
};
