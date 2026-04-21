import en_delimiters from '../../assets/texts/en/delimiter/delimiters.json';
import fr_delimiters from '../../assets/texts/fr/delimiter/delimiters.json';

export const delimiter = {
	en: en_delimiters,
	fr: fr_delimiters,
};

export type DelimiterType = {
	about: string;
	skills: string;
	projects: string;
	contact: string;
};
