import { Translation } from "i18nano";
import styles from "./index.module.css";
import { Tooltip } from "../../Basic/Tooltip";

export const MysticalAgriexpansion = () => {
	return (
		<div class={styles["card-border"]}>
			<div class={styles.card}>
				<div class={styles.splitted}>
					<div>
						<div class={styles.window}>
							<p>Mystical Agriexpansion</p>
						</div>
					</div>
					<div class={styles.logo} />
				</div>
				<div class={styles.window + " " + styles.about}>
					<p>
						<Translation path={"projects.mae.about"} />
					</p>
				</div>
				<a href="https://www.curseforge.com/minecraft/mc-mods/mystical-agriexpansion" target="_blank">
					<Translation path={"projects.mae.button"} />
				</a>

				<Tooltip path={"projects.mae.tooltip"} />
			</div>
		</div>
	);
};
