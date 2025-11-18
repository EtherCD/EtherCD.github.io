import "./app.css";
import { DiscordUserCard } from "./components/DiscordUserCard";
import { Effect } from "./components/Effect";

export function App() {
	return (
		<>
			<Effect></Effect>
			<DiscordUserCard
				bannerImage="/public/banner.png"
				bannerColor="#3b6e8d"
				username="EtherCD"
				avatar="/public/avatar.png"
				userLabel="DEV"
				memberSince="Aug 30, 2007"
				roles={[{ name: 'Member  "Pixelate It!"', color: "#fff" }]}
				badges={[
					{
						iconUrl: "https://raw.githubusercontent.com/pixelate-it/pixelbattle-frontend/1bf9e7ce41780ddbc31afca2871579f3270652ae/public/images/meta/favicon.svg",
						tooltip: "Pixelate It! Dev",
					},
				]}
				button={{
					text: "See my Github",
					url: "https://github.com/EtherCD",
				}}
			>
				Junior Developer, just enthusiast.
			</DiscordUserCard>
		</>
	);
}
