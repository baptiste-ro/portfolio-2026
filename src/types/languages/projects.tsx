import en_title from '../../assets/texts/en/projects/title.json';
import fr_title from '../../assets/texts/fr/projects/title.json';

import en_viewProject from '../../assets/texts/en/projects/viewProject.json';
import fr_viewProject from '../../assets/texts/fr/projects/viewProject.json';

export const projects = {
	en: en_title,
	fr: fr_title,
};

export type ProjectsType = {
	title: string;
};

export const viewProject = {
	en: en_viewProject,
	fr: fr_viewProject,
};

export type ViewProjectType = {
	text: string;
};
