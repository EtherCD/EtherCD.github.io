import { Translation } from "i18nano";
import styles from "./index.module.css";
import { Tooltip } from "../../Basic/Tooltip";

export const LWFProjectCard = () => {
	return (
		<div class={styles["card-border"]}>
			<div class={styles.card}>
				<div class={styles.header}>
					<img src="/assets/lwf.svg" />
					<h1>
						<Translation path={"projects.lwf.about"} />
					</h1>
				</div>
				<a href="https://lwf.ether.cd" target="_blank">
					<img src={"/icons/link.svg"} />
					<Translation path={"projects.lwf.button"} />
				</a>
				<Tooltip path={"projects.lwf.tooltip"} />
			</div>
		</div>
	);
};
