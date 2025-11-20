import "./app.css";
import { DiscordUserCard } from "./components/DiscordUserCard";
import { Background } from "./components/Background";

export function App() {
	return (
		<>
			<Background></Background>
			<div class="general">
				<div class="always">
					<h1>Here always winter.</h1>
					<p class="links">
						- <a href="#projects">projects</a>, contacts -
					</p>
				</div>
				<DiscordUserCard
					bannerImage="/banner.png"
					bannerColor="#3b6e8d"
					username="EtherCD"
					userId="ethercd"
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
							iconUrl: "/github.svg",
						},
					]}
					thinks="Buzzzzzy"
				>
					Junior Developer, just enthusiast. <br />
					Busy with studies
				</DiscordUserCard>
			</div>
			<h1 id="projects">My Projects</h1>
			<div class="flux">
				<br />
				<DiscordUserCard
					bannerColor="#006383ff"
					username="LightWeight Format"
					userId="lwf"
					avatar="/lwf.svg"
					memberSince="Aug 30, 2007"
					nitro={{
						accent: "#0099CC",
						additional: "#666666",
					}}
					roles={[
						{ name: "Binary", color: "#3178C6" },
						{ name: "Easy", color: "#3e6589" },
						{ name: "Fast", color: "#052542" },
						{ name: "Compact", color: "#e0ecf2" },
					]}
					buttons={[
						{
							text: "WebSite",
							url: "https://lwf.ether.cd",
							iconUrl: "",
						},
					]}
				>
					A very compact, compression friendly, binary format for storing JSON like objects.
				</DiscordUserCard>
				<br />
				<DiscordUserCard
					bannerColor="#000000"
					username="PixelBattle"
					userId="pixelate it!"
					avatar="/pixelate.svg"
					memberSince="Aug 30, 2007"
					nitro={{
						accent: "#3A3A3A",
						additional: "#3A3A3A",
					}}
					roles={[
						{ name: "Blue", color: "#0001FC" },
						{ name: "Red", color: "#FC0600" },
						{ name: "Yellow", color: "#E4C900" },
						{ name: "Green", color: "#02FF00" },
					]}
					buttons={[
						{
							text: "WebSite",
							url: "https://pixelbattle.fun",
							iconUrl: "",
						},
					]}
				>
					A place where you can compete for a spot on the canvas with other players
				</DiscordUserCard>
			</div>
		</>
	);
}
