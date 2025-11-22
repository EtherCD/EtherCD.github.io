import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EffectModeState {
	mode: WebSiteEffect;
	setMode: (status: WebSiteEffect) => void;
	next: () => void;
}

export enum WebSiteEffect {
	SNOW = "snow",
	RAIN = "rain",
	STARS = "stars",
	AUTUMN = "autumn",
}

export const Effects = Object.values(WebSiteEffect);

function getSeasonDefault() {
	const month = new Date().getMonth();

	if (month === 12 || month <= 2) return WebSiteEffect.SNOW;
	if (month >= 9) return WebSiteEffect.AUTUMN;
	return WebSiteEffect.STARS;
}

export const useEffectMode = create<EffectModeState>()(
	persist(
		(set, get) => ({
			mode: getSeasonDefault(),
			setMode(mode) {
				set({ mode });
			},
			next() {
				const { mode } = get();
				const index = Effects.indexOf(mode);
				const next = Effects[(index + 1) % Effects.length];
				console.log(next);
				set({ mode: next });
			},
		}),
		{
			name: "effect",
		}
	)
);
