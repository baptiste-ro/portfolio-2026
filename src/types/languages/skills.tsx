import en_skills from '../../assets/texts/en/skills/skills.json';
import fr_skills from '../../assets/texts/fr/skills/skills.json';

import en_viewProject from '../../assets/texts/en/skills/viewProject.json';
import fr_viewProject from '../../assets/texts/fr/skills/viewProject.json';

export const skills = {
	en: en_skills,
	fr: fr_skills,
};

export type SkillsType = {
	title: string;
	categories: {
		languages: string;
		databases: string;
		frontend: string;
		backend: string;
		tools: string;
	};
};

export const viewProject = {
	en: en_viewProject,
	fr: fr_viewProject,
};

export type ViewProjectType = {
	text: string;
};
