import styles from "./index.module.css";

const email = "ethercd@proton.me";

export const Footer = () => {
	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(email);
	};

	return (
		<footer class={styles.footer}>
			<h1 id="contacts">@EtherCD - 2025</h1>
			<div>
				<p>Contacts - </p>
				<a href="https://github.com/EtherCD" target="_blank">
					<img src="/icons/github.svg" alt="" />
				</a>
				<a href="https://discord.com/users/930091767842353212" target="_blank">
					<img src="/icons/discord.svg" alt="" />
				</a>
				<div class={styles["success-icon"]} onClick={copyToClipboard}>
					<img src="/icons/email.svg" alt="email" />
					<div class={`${styles.tooltip} ${styles["success-up"]}`}>{email}</div>
				</div>
			</div>
		</footer>
	);
};
