import { useState } from "preact/hooks";
import styles from "./index.module.css";
import { Translation } from "i18nano";

const email = "ethercd@proton.me";

export const Footer = () => {
	const [show, setShow] = useState(false);
	const [success, setSuccess] = useState(false);

	const copyToClipboard = async () => {
		setShow(!show);

		if (show) {
			setSuccess(!success);
			return;
		}
		try {
			await navigator.clipboard.writeText(email);
			setSuccess(!success);
		} catch {
			setShow(true);
		}
	};

	return (
		<footer class={styles.footer}>
			<h1 id="contacts">@EtherCD - 2025</h1>
			<div class={styles.contacts}>
				<p>Contacts - </p>
				<a href="https://github.com/EtherCD" target="_blank">
					<img src="/icons/github.svg" alt="" />
				</a>
				<a href="https://discord.com/users/930091767842353212" target="_blank">
					<img src="/icons/discord.svg" alt="" />
				</a>
				<div class={styles["email-icon"] + " " + (show ? styles["show"] : "")} onClick={copyToClipboard}>
					<img src="/icons/email.svg" alt="email" />
					<div class={`${styles.msg} ${styles["msg-up"]}`}>
						{!success ? (
							<a href="mailto:ethercd@proton.me" target="_blank">
								ethercd@proton.me
							</a>
						) : (
							<Translation path={"footer.copied"} />
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};
