import en_skills from '../../assets/texts/en/skills/skills.json';
import fr_skills from '../../assets/texts/fr/skills/skills.json';

export const skills = {
	en: en_skills,
	fr: fr_skills,
};

export type SkillsType = {
	title: string;
	categories: {
		title: string;
		color: string;
		background: string;
		icon: string[];
		skills: string[];
	}[];
};
