import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EffectModeState {
	mode: "stars" | "snow";
	setMode: (status: "stars" | "snow") => void;
}

export const useEffectMode = create<EffectModeState>()(
	persist(
		(set) => ({
			mode: "stars",
			setMode(mode) {
				set({ mode });
			},
		}),
		{
			name: "effect",
		}
	)
);
