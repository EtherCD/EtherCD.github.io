import { useTranslationChange } from "i18nano";
import { setLangInLocalStorage, translationsNames } from "../../utils/i18nano-integration";
import styles from "./index.module.css";

export const LanguageSelect = () => {
	const translation = useTranslationChange();

	return (
		<select
			className={styles.select}
			value={translation.lang}
			onChange={(event) => {
				translation.change((event.target! as HTMLSelectElement).value);
				setLangInLocalStorage((event.target! as HTMLSelectElement).value);
			}}
		>
			{translation.all.map((lang, index) => (
				<option key={lang} value={lang}>
					{translationsNames[index]}
				</option>
			))}
		</select>
	);
};
