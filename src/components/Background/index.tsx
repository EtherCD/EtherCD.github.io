import { useEffect, useRef, useState } from "preact/hooks";
import { StarEffect } from "./Stars";
import { SnowEffect } from "./Snow";
import { useEffectMode } from "../../stores/mode";

export const Background = () => {
	const refs = useRef<HTMLCanvasElement | null>(null);
	const stars = useRef<StarEffect>();
	const snow = useRef<SnowEffect>();
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
			const { mode } = useEffectMode.getState();
			if (mode === "stars") stars.current!.render(ctx!, width, height);
			else snow.current!.render(ctx!, width, height);
		}
	};

	useEffect(() => {
		onResize();
		window.onresize = onResize;
		stars.current! = new StarEffect(document.body.clientWidth, document.body.clientHeight);
		snow.current! = new SnowEffect(document.body.clientWidth, document.body.clientHeight);
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
