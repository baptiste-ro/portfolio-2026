import SkillListElement from './skill/SkillListElement';
import { type SkillsType } from '../../../types/languages/skills';

export default function Skills({ skillList }: { skillList: SkillsType }) {
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
