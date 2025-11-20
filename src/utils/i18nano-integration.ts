const translationsPath = "../assets/translations/*.json";
const translationsPathLength = translationsPath.split("*")[0].length;

const loadTranslations = (): Translations => {
	const files: GlobModuleObject = import.meta.glob("../assets/translations/*.json", {
		eager: true,
	});
	const filesName = Object.keys(files);
	const result: Translations = {};
	for (const i in filesName) {
		const value = filesName[i];
		const translationName = value.slice(translationsPathLength).split(".")[0];
		result[translationName] = async () => ({
			name: "Unknown lang",
			...files[value].default,
		});
	}
	return result;
};

export const setLangInLocalStorage = (value: string) => {
	if (translationsKeys.includes(value)) localStorage.setItem("language", value);
};

const getLangFromLocalStorage = (): string => {
	if (!localStorage.getItem("language") || !localStorage.getItem("language") + "" in translationsKeys) {
		setLangInLocalStorage(translationsKeys[0]);
		return translationsKeys[0] + "";
	}
	return localStorage.getItem("language") + "";
};

const getLangNames = (): Array<string> => {
	const translationNames: Array<string> = [];
	Object.values(translations).forEach((value) => {
		value().then((translation: Translation) => {
			translationNames.push(translation.name);
		});
	});
	return translationNames;
};

export const translations = loadTranslations();
const translationsKeys = Object.keys(translations);
export const initialLanguage = getLangFromLocalStorage();
export const translationsNames = getLangNames();

type Translations = Record<string, TranslationPromise>;
type GlobModuleObject = Record<string, { default: Record<string, string> }>;
type TranslationPromise = () => Promise<Translation>;
type Translation = {
	[key: string]: string;
	name: string;
};
