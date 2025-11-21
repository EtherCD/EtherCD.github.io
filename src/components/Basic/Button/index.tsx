import styles from "./index.module.css";

interface Props {
	onClick: () => void;
	accentColor: string;
	class?: string;
	children: preact.ComponentChild;
}

export const Button = (props: Props) => {
	return (
		<>
			<button
				class={styles.button + " " + props.class}
				onClick={props.onClick}
				style={{
					"--accent": props.accentColor,
				}}
			>
				{props.children}
			</button>
		</>
	);
};
