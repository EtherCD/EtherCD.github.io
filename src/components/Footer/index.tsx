import styles from "./index.module.css";

export const Footer = () => {
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
			</div>
		</footer>
	);
};
