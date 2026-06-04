import { create } from "zustand";
import {RainEffect} from "../objects/Rain.ts";
import {SnowEffect} from "../objects/Snow.ts";
import {StarEffect} from "../objects/Stars.ts";
import {LeafFallEffect} from "../objects/LeafFall.ts";
import {Effect} from "../objects/Effect.ts";
import {useEffectMode, WebSiteEffect} from "./mode.ts";

export interface SectionBoundary {
    x: number;
    y: number;
    width: number;
}

interface EffectModeState {
    current: Effect,
    update: () => void;
    registerSection: (boundary: SectionBoundary) => void;
}

const effectObjects: Record<WebSiteEffect, Effect> = {
    [WebSiteEffect.RAIN]: new RainEffect(document.body.clientWidth, document.body.clientHeight),
    [WebSiteEffect.SNOW]: new SnowEffect(document.body.clientWidth, document.body.clientHeight),
    [WebSiteEffect.STARS]: new StarEffect(document.body.clientWidth, document.body.clientHeight),
    [WebSiteEffect.AUTUMN]: new LeafFallEffect(document.body.clientWidth, document.body.clientHeight),
}

export const useEffectState = create<EffectModeState>(
    (set) => ({
        current: effectObjects[useEffectMode.getState().mode],
        update() {
            const effectMode = useEffectMode.getState().mode;
            set({ current: effectObjects[effectMode] });
        },
        registerSection(boundary: SectionBoundary) {
            for (const effectId in WebSiteEffect) {
                // @ts-ignore
                const effectName = WebSiteEffect[effectId as typeof WebSiteEffect];
                const effect = effectObjects[effectName as WebSiteEffect];
                effect.registerSection(boundary.x, boundary.y, boundary.width);
            }
        }
    })
);
