import { Translation } from "i18nano";
import styles from "./index.module.css";
import { useState } from "preact/hooks";

export const Tooltip = (props: { path: string }) => {
	const [show, setShow] = useState(false);

	return (
		<div class={styles["tooltip-icon"] + " " + (show ? styles["show"] : "")} onClick={() => setShow(!show)}>
			<img src={"/icons/question.svg"} alt="" />
			<div class={`${styles.tooltip} ${styles["tooltip-up"]}`}>
				<Translation path={props.path} />
			</div>
		</div>
	);
};
