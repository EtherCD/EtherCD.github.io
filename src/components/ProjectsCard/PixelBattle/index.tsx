import { Translation } from "i18nano";
import styles from "./index.module.css";
import { Tooltip } from "../../Basic/Tooltip";

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
					<img src="/assets/pixelate.svg" class={styles.logo} />
				</div>
				<div class={styles.window + " " + styles.about}>
					<p>
						<Translation path={"projects.pb.about"} />
					</p>
				</div>
				<a href="https://pixelbattle.fun" target="_blank">
					<Translation path={"projects.pb.button"} />
				</a>
				<Tooltip path={"projects.pb.tooltip"} />
			</div>
		</div>
	);
};
