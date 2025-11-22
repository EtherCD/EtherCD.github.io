import styles from "./index.module.css";

interface Props {
	img: string;
	header: string;
	accentColor: string;
	additionalColor: string;
	children: preact.ComponentChild;
}

export const Skill = (props: Props) => {
	return (
		<div
			class={styles.skill}
			style={{
				"--accent": props.accentColor,
				"--additional": props.additionalColor,
			}}
		>
			<div class={styles.border}></div>
			<div class={styles.background}></div>
			<div class={styles.content}>
				<img src={props.img} alt="skill" />
				<h1>{props.header}</h1>
				{props.children}
			</div>
		</div>
	);
};
