import { useEffect, useState } from 'react';
import skillsData from '../../../../assets/data/skills.json';
import SkillElement from './SkillElement';

export default function SkillListElement({ category }: { category: string }) {
	const [list, setList] = useState<string[]>([]);
	const backgroundColor = (() => {
		if (category === 'languages') {
			return '#eab3081a';
		} else if (category === 'backend') {
			return '#22c55e1a';
		} else if (category === 'tools') {
			return '#14b8a61a';
		} else if (category === 'databases') {
			return '#a855f71a';
		} else if (category === 'frontend') {
			return '#3b82f61a';
		}
		return '#14b8a61a';
	})();

	useEffect(() => {
		const skills = skillsData[category as keyof typeof skillsData] || [];
		setList(skills.sort((a, b) => a.length - b.length));
	}, [category]);

	return (
		<div className="skill-list flex flex-wrap icon-gap w-full">
			{list.map(skill => (
				<SkillElement
					key={skill}
					skill={skill}
					backgroundColor={backgroundColor}
				/>
			))}
		</div>
	);
}
