import type { ComponentChildren } from "preact";
import styles from "./index.module.css";

interface Props {
	bannerImage?: string;
	bannerColor?: string;
	nitro: {
		accent: string;
		additional: string;
	};
	thinks?: string;
	avatar: string;
	badges: Array<{ iconUrl: string; tooltip: string }>;
	username: string;
	discriminator?: string;
	userLabel?: string;
	memberSince?: string;
	roles: Array<{ name: string; color: string }>;
	availableRoles?: Array<{ name: string; color: string }>;
	acceptMessages?: boolean;
	button?: { text: string; url: string };
	userId?: string;
	children?: ComponentChildren;
}

export const DiscordUserCard = (props: Props) => {
	return (
		<>
			<div
				class={styles["card-border"]}
				style={
					props.nitro
						? {
								"--accent": props.nitro.accent,
								"--additional": props.nitro.additional,
						  }
						: {}
				}
			>
				<div class={styles["card"]}>
					<div class={styles["card-header"]}>
						{props.bannerImage ? (
							<div class={styles["banner-img"]} style={{ backgroundImage: `url(${props.bannerImage})` }}></div>
						) : (
							<div class={styles["banner"]} style={props.bannerColor ? { background: props.bannerColor } : undefined}></div>
						)}
					</div>

					<div class={styles["profile-body"]}>
						<div class={styles["profile-header"]}>
							{props.userId ? (
								<a class={styles["profile-logo"]} href={`https://discord.com/users/${props.userId}`} target="_blank">
									<img src={props.avatar} alt="profile-avatar" />
								</a>
							) : (
								<div class={styles["profile-logo"]}>
									<img src={props.avatar} alt="profile-avatar" />
								</div>
							)}
							{props.thinks && (
								<div class={styles["profile-thinks"]}>
									<p>{props.thinks.length > 26 ? props.thinks.slice(0, 25) + "..." : props.thinks}</p>
									<img src="/thinks.svg" />
								</div>
							)}
						</div>
						<div class={styles["user-info"]}>
							<p class={styles["username"]}>EtherCD</p>
							<div class={styles["userid"]}>
								<p>ethercd</p>
								{props.badges?.length > 0 && (
									<div class={styles["badges-container"]}>
										{props.badges.map((badge) => (
											<div class={styles["badge-item"]} key={badge.iconUrl}>
												<img src={badge.iconUrl} alt="" />
												<div class={`${styles.tooltip} ${styles["tooltip-up"]}`}>{badge.tooltip}</div>
											</div>
										))}
									</div>
								)}
							</div>
						</div>

						<div class={styles["basic-infos"]}>
							<p>{props.children}</p>
						</div>

						{props.roles?.length > 0 && (
							<div class={styles["roles"]}>
								<div class={styles["roles-list"]}>
									{props.roles.map((role) => (
										<div class={styles["role"]} key={role.name}>
											<div class={styles["role-color"]} style={{ background: role.color }} onClick={(e) => (e.currentTarget.parentElement as HTMLElement)?.remove()}></div>
											<p>{role.name}</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
