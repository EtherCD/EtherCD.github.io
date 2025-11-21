import { Translation } from "i18nano";
import styles from "./index.module.css";

export const Tooltip = (props: { path: string }) => {
	return (
		<div class={styles["tooltip-icon"]}>
			<img src={"/icons/question.svg"} alt="" />
			<div class={`${styles.tooltip} ${styles["tooltip-up"]}`}>
				<Translation path={props.path} />
			</div>
		</div>
	);
};
