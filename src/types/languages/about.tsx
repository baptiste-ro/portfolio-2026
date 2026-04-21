import en_paragraphs from '../../assets/texts/en/about/paragraphs.json';
import fr_paragraphs from '../../assets/texts/fr/about/paragraphs.json';

export const texts = {
	en: en_paragraphs,
	fr: fr_paragraphs,
};

export type AboutType = {
	selfPresentation: string;
	workingBehavior: string;
	passionOrigin: string;
	determination: string;
};
