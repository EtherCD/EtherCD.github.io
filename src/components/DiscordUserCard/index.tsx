import type { ComponentChildren } from "preact";
import styles from "./index.module.css";

interface Props {
	bannerImage?: string;
	bannerColor?: string;
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
		<div class={styles.card}>
			<div class={styles["card-header"]}>
				{props.bannerImage ? (
					<div class={styles["banner-img"]} style={{ backgroundImage: `url(${props.bannerImage})` }}></div>
				) : (
					<div class={styles["banner"]} style={props.bannerColor ? { background: props.bannerColor } : undefined}></div>
				)}
			</div>

			<div class={styles["card-body"]}>
				<div class={styles["profile-header"]}>
					{props.userId ? (
						<a class={styles["profil-logo"]} href={`https://discord.com/users/${props.userId}`} target="_blank">
							<img src={props.avatar} alt="profile-avatar" />
						</a>
					) : (
						<div class={styles["profil-logo"]}>
							<img src={props.avatar} alt="profile-avatar" />
						</div>
					)}

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

				<div class={styles["profile-body"]}>
					<div class={styles["username"]}>
						{props.username}
						{props.discriminator && <span>#{props.discriminator}</span>}
						{props.userLabel && <div class={styles["badge"]}>{props.userLabel}</div>}
					</div>

					<hr />

					{props.button && (
						<a href={props.button.url} target="_blank" class={styles["btn"]}>
							{props.button.text}
						</a>
					)}

					<div class={styles["basic-infos"]}>
						<div class={styles["category-title"]}>About Me</div>
						<p>{props.children}</p>
					</div>

					{props.memberSince && (
						<div class={styles["basic-infos"]}>
							<div class={styles["category-title"]}>Member Since</div>
							<p>{props.memberSince}</p>
						</div>
					)}

					{props.roles?.length > 0 && (
						<div class={styles["roles"]}>
							<div class={styles["category-title"]}>Roles</div>
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

					<div class={styles["note"]}>
						<div class={styles["category-title"]}>Note</div>
						<textarea placeholder="Click to add a note"></textarea>
					</div>

					{props.acceptMessages && (
						<div class={styles["message"]}>
							<input type="text" placeholder={`Message @${props.username}`} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
