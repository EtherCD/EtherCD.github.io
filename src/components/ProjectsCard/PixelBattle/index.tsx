import styles from "./index.module.css";

export const PixelBattleCard = () => {
	return (
		<div class={styles["card-border"]}>
			<div class={styles.card}>
				<div class={styles.splitted}>
					<div>
						<div class={styles.window}>
							<p>Pixel Battle</p>
						</div>
						<div class={styles.window}>
							<p>By Pixelate It!</p>
						</div>
					</div>
					<img src="/pixelate.svg" />
				</div>
				<div class={styles.window}>
					<p>Individually, you can create something. Together, we can create something greater.</p>
				</div>
				<a href="https://lwf.ether.cd" target="_blank">
					Web site
				</a>
			</div>
		</div>
	);
};
