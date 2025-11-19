import "./app.css";
import { DiscordUserCard } from "./components/DiscordUserCard";
import { Background } from "./components/Background";

export function App() {
	return (
		<>
			<Background></Background>
			<DiscordUserCard
				bannerImage="/banner.png"
				bannerColor="#3b6e8d"
				username="EtherCD"
				avatar="/avatar.png"
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
				buttons={[
					{
						text: "My Github",
						url: "https://github.com/EtherCD",
						iconUrl: "/icons/github.svg",
					},
				]}
				thinks="Buzzzzzy"
			>
				Junior Developer, just enthusiast. <br />
				Busy with studies
			</DiscordUserCard>
		</>
	);
}
