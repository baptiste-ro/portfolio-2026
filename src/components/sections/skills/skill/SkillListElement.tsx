import SkillElement from './SkillElement';
import Icon from '../icons/Icon';
import { type SkillsType } from '../../../../types/languages/skills';

export default function SkillListElement({
	categories,
}: {
	categories: SkillsType['categories'];
}) {
	return (
		<>
			{categories.map(category => {
				const li = category.skills.sort((a, b) => a.length - b.length);
				return (
					<div className="skill-component" key={category.title}>
						<Icon
							title={category.title}
							color={category.color}
							background={category.background}
							icon={category.icon}
						/>
						<div className="skill-list flex flex-wrap icon-gap w-full">
							{li.map(skill => (
								<SkillElement
									key={skill}
									skill={skill}
									backgroundColor={category.background}
								/>
							))}
						</div>
					</div>
				);
			})}
		</>
	);
}

// display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     gap: 2%;
