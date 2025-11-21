import "./app.css";
import { Background } from "./components/Background";
import { TranslationProvider } from "i18nano";
import { translations, initialLanguage } from "./utils/i18nano-integration";
import { HomePage } from "./pages/home";
import { Suspense } from "preact/compat";

export function App() {
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
