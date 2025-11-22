import { useEffect, useRef, useState } from "preact/hooks";
import { StarEffect } from "./Stars";
import { SnowEffect } from "./Snow";
import { Effects, useEffectMode } from "../../stores/mode";
import type { Effect } from "./Effect";
import { RainEffect } from "./Rain";
import { LeafFallEffect } from "./LeafFall";

export const Background = () => {
	const refs = useRef<HTMLCanvasElement | null>(null);
	const effects = useRef<Effect[]>([]);
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
	const { mode } = useEffectMode();
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
			if (effects.current![Effects.indexOf(mode)]) effects.current![Effects.indexOf(mode)].render(ctx!, width, height);
		}
	};

	const restartAllEffects = () => {
		effects.current = [
			new SnowEffect(document.body.clientWidth, document.body.clientHeight),
			new RainEffect(document.body.clientWidth, document.body.clientHeight),
			new StarEffect(document.body.clientWidth, document.body.clientHeight),
			new LeafFallEffect(document.body.clientWidth, document.body.clientHeight),
		];
	};

	useEffect(() => {
		onResize();
		window.onresize = onResize;
		restartAllEffects();
		setCtx(refs.current!.getContext("2d")!);
		requestAnimationFrame(draw);
	}, [refs.current]);

	useEffect(() => {
		restartAllEffects();
	}, [mode]);

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
