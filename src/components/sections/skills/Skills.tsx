import { useEffect, useState } from 'react';
import SkillListElement from './skill/SkillListElement';
import { skills, type SkillsType } from '../../../types/languages/skills';
import { useParams } from 'react-router';

export default function Skills() {
	const [skillList, setSkillList] = useState<SkillsType>(skills.en);

	const { lang } = useParams();

	useEffect(() => {
		setSkillList(skills[lang as keyof typeof skills] || skills.en);
	}, [lang]);

	return (
		<section className="pb-sm px-sm w-full">
			<div className="title">
				<p className="leading-relaxed white-text pb-sm skill-title">
					{skillList.title}
				</p>
			</div>
			<div className="flex flex-row flex-wrap gap-2p row-gap-lg">
				<SkillListElement categories={skillList.categories} />
			</div>
		</section>
	);
}
