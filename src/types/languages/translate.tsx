import en_language from '../../assets/texts/en/translate/languages.json';
import fr_language from '../../assets/texts/fr/translate/languages.json';

export const translateLanguages = {
	en: en_language,
	fr: fr_language,
};

export type TranslateLanguagesType = {
	current: {
		text: string;
		code: string;
	};
	others: {
		text: string;
		code: string;
	}[];
};
