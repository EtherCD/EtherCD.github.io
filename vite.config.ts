import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://vite.dev/config/
export default defineConfig({
    plugins: [preact()],
    build: {
        cssMinify: "lightningcss",
    },
    css: {
        transformer: "lightningcss",
        lightningcss: {
            targets: browserslistToTargets(browserslist(">= 0.25%")),
        },
    },
});
