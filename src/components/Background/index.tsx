import { useEffect, useRef, useState } from "preact/hooks";
import { useEffectMode } from "../../stores/mode";
import {useEffectState} from "../../stores/effect.ts";

export const Background = () => {
	const refs = useRef<HTMLCanvasElement | null>(null);
	const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
	const { mode } = useEffectMode();
	const { update } = useEffectState();

	const onResize = () => {
		if (!refs.current!) return;

		const canvas = refs.current!;
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
	};

	const draw = () => {
		requestAnimationFrame(draw);
		const current = useEffectState.getState().current;
		if (ctx) {
			const width = document.body.clientWidth;
			const height = document.body.clientHeight;
			ctx.clearRect(0, 0, width, height);
			current.render(ctx!, width, height);
		}
	};

	useEffect(() => {
		onResize();
		window.onresize = onResize;
		setCtx(refs.current!.getContext("2d")!);
		requestAnimationFrame(draw);
	}, [refs.current]);

	useEffect(() => {
		update();
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
