import en_paragraphs from '../../assets/texts/en/about/paragraphs.json';
import fr_paragraphs from '../../assets/texts/fr/about/paragraphs.json';

export const aboutParagraphs = {
	en: en_paragraphs,
	fr: fr_paragraphs,
};

export type AboutType = {
	aboutParagraphs: string[];
};
