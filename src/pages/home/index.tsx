import { DiscordUserCard } from "../../components/DiscordUserCard";
import { LWFProjectCard } from "../../components/ProjectsCard/LWF";
import { PixelBattleCard } from "../../components/ProjectsCard/PixelBattle";
import { Translation, useTranslation } from "i18nano";
import styles from "./index.module.css";
import { MysticalAgriexpansion } from "../../components/ProjectsCard/MysticalAgriexpansion";
import { Footer } from "../../components/Footer";
import { LanguageSelect } from "../../components/LanguageSelect";
import { useEffectMode } from "../../stores/mode";
import { Button } from "../../components/Basic/Button";
import { Skill } from "../../components/Skill";

export const HomePage = () => {
	const i18n = useTranslation();
	const { mode, next } = useEffectMode();

	return (
		<div class={styles.container}>
			<section class={styles.general}>
				<div class={styles.always}>
					<h1>
						<Translation path={"h1." + mode} />
					</h1>
					<h1 class={styles.enjoy}>
						<Translation path={"h1.enjoy"} />
					</h1>
					<div class={styles.contacts}>
						<LanguageSelect />
						<a href="https://github.com/EtherCD" target="_blank">
							<img src="/icons/github.svg" alt="" />
						</a>
						<a href="https://discord.com/users/930091767842353212" target="_blank">
							<img src="/icons/discord.svg" alt="" />
						</a>
						<Button
							onClick={() => {
								next();
								console.log("FUCK?");
							}}
							accentColor={"#cc241d"}
						>
							<Translation path={"button.mode." + mode} />
						</Button>
					</div>
				</div>
				<div class={styles.card}>
					<DiscordUserCard
						bannerImage="/card/banner.png"
						bannerColor="#3b6e8d"
						username="EtherCD"
						userId="ethercd"
						avatar="/card/avatar.png"
						userLabel="DEV"
						memberSince="Aug 30, 2007"
						nitro={{
							accent: "#886636",
							additional: "#f3ca88",
						}}
						roles={[
							{ name: "TypeScript", color: "#3178C6" },
							{ name: "Java", color: "#f89820" },
							{ name: "Zig", color: "#F7A41D" },
						]}
						badges={[
							{
								iconUrl: "https://raw.githubusercontent.com/pixelate-it/pixelbattle-frontend/1bf9e7ce41780ddbc31afca2871579f3270652ae/public/images/meta/favicon.svg",
								tooltip: "Pixelate It! Dev",
							},
						]}
						thinks={i18n("card.thinks")}
					>
						<Translation path={"card.about"} />
					</DiscordUserCard>
				</div>
			</section>

			<section class={styles.projects_section}>
				<h1 id="work" class={styles.projects}>
					<Translation path={"can.title"} />
				</h1>
				<div class={styles.flux}>
					<Skill header={i18n("can.0")} img="/assets/eos.svg" accentColor="#D65D0E" additionalColor="#7F445F">
						<Translation path={"can.graphics.0"} />
						<a href="https://github.com/pixelate-it/pixelbattle-frontend/tree/pixiless-next"> pixilness</a> <Translation path={"can.graphics.1"} />{" "}
						<a href="https://github.com/pixelate-it">
							<Translation path={"can.graphics.2"} />
						</a>
						.
					</Skill>
					<Skill header={i18n("can.1")} img="/assets/aether.svg" accentColor="#83A598" additionalColor="#7F445F">
						<Translation path={"can.connections.0"} />
					</Skill>
					<Skill header={i18n("can.2")} img="/assets/umbriel.svg" accentColor="#AB3527" additionalColor="#7F445F">
						<Translation path={"can.integrations.0"} />
						<a href="https://github.com/EtherCD/MysticalAgriexpansion"> MAE</a>. <Translation path={"can.integrations.1"} />
					</Skill>
				</div>
			</section>

			<section class={styles.projects_section}>
				<h1 id="projects" class={styles.projects}>
					<Translation path={"h1.projects"} />
				</h1>
				<div class={styles.flux}>
					<LWFProjectCard />
					<PixelBattleCard />
					<MysticalAgriexpansion />
				</div>
			</section>

			<Footer></Footer>
		</div>
	);
};
