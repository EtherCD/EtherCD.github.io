import "./app.css";
import { Background } from "./components/Background";
import { TranslationProvider } from "i18nano";
import { translations, initialLanguage } from "./utils/i18nano-integration";
import { HomePage } from "./pages/home";
import { Suspense, useEffect } from "preact/compat";
import { useEffectMode } from "./stores/mode";

export function App() {
	const { mode } = useEffectMode();

	useEffect(() => {
		document.body.className = mode + "";
	}, [mode]);

	return (
		<>
			<TranslationProvider translations={translations} language={initialLanguage}>
				<Background></Background>
				<Suspense fallback={"asd"}>
					<HomePage></HomePage>
				</Suspense>
			</TranslationProvider>
		</>
	);
}
