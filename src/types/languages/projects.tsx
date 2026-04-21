import en_title from '../../assets/texts/en/projects/projects.json';
import fr_title from '../../assets/texts/fr/projects/projects.json';

export const projects = {
	en: en_title,
	fr: fr_title,
};

export type ProjectsType = {
	title: string;
	viewProject: string;
	projects: {
		title: string;
		description: string;
		link: string;
		image: string;
		github: string;
	}[];
};