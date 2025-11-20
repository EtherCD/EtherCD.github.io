import "./app.css";
import { DiscordUserCard } from "./components/DiscordUserCard";
import { Background } from "./components/Background";
import { LWFProjectCard } from "./components/ProjectsCard/LWF";
import { PixelBattleCard } from "./components/ProjectsCard/PixelBattle";

export function App() {
	return (
		<>
			<Background></Background>
			<div class="general">
				<div class="always">
					<h1>Here always winter.</h1>
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
					thinks="Eat more electricity!"
				>
					I'm an 18-year-old junior programmer, enthusiastic designer, and first-class electrician. I'm a fourth-year engineering student.
				</DiscordUserCard>
				<p class="links">
					- <a href="#projects">Projects</a>, Contacts -
				</p>
			</div>
			<h1 id="projects">My Projects</h1>
			<div class="flux">
				<br />
				<LWFProjectCard />
				<PixelBattleCard />
			</div>

			<footer>
				<h1>@EtherCD - 2025</h1>
			</footer>
		</>
	);
}
