import styles from "./index.module.css";

interface Props {
	onClick: () => void;
	children: preact.ComponentChild;
}

export const Button = (props: Props) => {
	return (
		<>
			<button class={styles.button} onClick={props.onClick}>
				{props.children}
			</button>
		</>
	);
};
