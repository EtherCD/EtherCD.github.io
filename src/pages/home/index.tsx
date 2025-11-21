import { DiscordUserCard } from "../../components/DiscordUserCard";
import { LWFProjectCard } from "../../components/ProjectsCard/LWF";
import { PixelBattleCard } from "../../components/ProjectsCard/PixelBattle";
import { Translation, useTranslation } from "i18nano";
import styles from "./index.module.css";
import { MysticalAgriexpansion } from "../../components/ProjectsCard/MysticalAgriexpansion";
import { Footer } from "../../components/Footer";
import { LanguageSelect } from "../../components/LanguageSelect";

export const HomePage = () => {
    const i18n = useTranslation();
    return (
        <div class={styles.container}>
            <section class={styles.general}>
                <div class={styles.always}>
                    <h1>
                        <Translation path={"h1.always"} />
                    </h1>
                    <h1 class={styles.enjoy}>
                        <Translation path={"h1.enjoy"} />
                    </h1>
                    <div class={styles.contacts}>
                        <LanguageSelect />
                        <a href="https://github.com/EtherCD" target="_blank">
                            <img src="/icons/github.svg" alt="" />
                        </a>
                        <a
                            href="https://discord.com/users/930091767842353212"
                            target="_blank"
                        >
                            <img src="/icons/discord.svg" alt="" />
                        </a>
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
                                iconUrl:
                                    "https://raw.githubusercontent.com/pixelate-it/pixelbattle-frontend/1bf9e7ce41780ddbc31afca2871579f3270652ae/public/images/meta/favicon.svg",
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
