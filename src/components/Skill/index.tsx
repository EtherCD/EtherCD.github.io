import { useState } from "preact/hooks";
import styles from "./index.module.css";

interface Props {
	img: string;
	header: string;
	accentColor: string;
	additionalColor: string;
	cardUrl: string;
	children: preact.ComponentChild;
}

export const Skill = (props: Props) => {
	const [flipped, setFlipped] = useState(false);
	return (
		<div
			class={styles.skill + " " + (flipped ? styles.flipped : "")}
			style={{
				"--accent": props.accentColor,
				"--additional": props.additionalColor,
				"--card-url": `url(${props.cardUrl})`,
			}}
			onClick={() => setFlipped(!flipped)}
		>
			{/* <div class={styles.border}></div> */}
			<div class={styles.front}></div>
			<div class={styles.back}>
				<div class={styles.border}>
					<div class={styles.inner}>
						{/* <img src={props.img} alt="skill" /> */}
						<h1>{props.header}</h1>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};
