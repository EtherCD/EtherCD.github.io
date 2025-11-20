import styles from "./index.module.css";

export const LWFProjectCard = () => {
	return (
		<div class={styles["card-border"]}>
			<div class={styles.card}>
				<div class={styles.header}>
					<img src="/lwf.svg" />
					<h1>Lightweight Format - A very compact, compression friendly, binary format for storing JSON like objects.</h1>
				</div>
				<a href="https://lwf.ether.cd" target="_blank">
					<img src={"/link.svg"} />
					lwf website
				</a>
			</div>
		</div>
	);
};
