import en_sections from '../../assets/texts/en/header/sections.json';
import fr_sections from '../../assets/texts/fr/header/sections.json';

export const headerSections = {
	en: en_sections,
	fr: fr_sections,
};

export type HeaderSectionsType = {
	home: string;
	links: {
		label: string;
		id: string;
	}[];
};
