import type { ComponentChildren } from "preact";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "preact/hooks";

interface Props {
	bannerImage?: string;
	bannerColor?: string;
	nitro: {
		accent: string;
		additional: string;
	};
	thinks?: string;
	avatar: string;
	badges?: Array<{ iconUrl: string; tooltip: string }>;
	username: string;
	discriminator?: string;
	userLabel?: string;
	memberSince?: string;
	roles: Array<{ name: string; color: string }>;
	availableRoles?: Array<{ name: string; color: string }>;
	acceptMessages?: boolean;
	buttons?: Array<{ text: string; url: string; iconUrl: string }>;
	userId: string;
	children?: ComponentChildren;
}

export const DiscordUserCard = (props: Props) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number>(0);

	useEffect(() => {
		if (cardRef.current) {
			setHeight(cardRef.current.clientHeight);
		}
	}, [cardRef.current]);

	return (
		<>
			<div
				ref={cardRef}
				class={styles["card-border"]}
				style={
					props.nitro
						? {
								"--accent": props.nitro.accent,
								"--additional": props.nitro.additional,
								"--height": height,
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
									<p>{props.thinks.length > 23 ? props.thinks.slice(0, 22) + "..." : props.thinks}</p>
									<img src="/assets/thinks.svg" />
								</div>
							)}
						</div>
						<div class={styles["user-info"]}>
							<p class={styles["username"]}>{props.username}</p>
							<div class={styles["userid"]}>
								<p>{props.userId}</p>
								{props.badges && props.badges?.length > 0 && (
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

						{props.buttons && (
							<div class={styles["buttons"]}>
								{props.buttons.map((v, i, _) => (
									<a href={v.url} target="_blank" class={styles["btn"]} key={i}>
										{v.iconUrl.length > 0 && <img src={v.iconUrl} />}
										{v.text}
									</a>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
