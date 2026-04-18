import Backend from './icons/Backend';
import Database from './icons/Database';
import Frontend from './icons/Frontend';
import Languages from './icons/Languages';
import Tools from './icons/Tools';
import SkillListElement from './skill/SkillListElement';

export default function Skills() {
	return (
		<section id="skills" className="pb-sm px-sm w-full">
			<div className="skill-grid-parent">
				<div className="skill-grid-language">
					<Languages />
					<SkillListElement category="languages" />
				</div>
				<div className="skill-grid-db">
					<Database />
					<SkillListElement category="databases" />
				</div>
				<div className="skill-grid-front">
					<Frontend />
					<SkillListElement category="frontend" />
				</div>
				<div className="skill-grid-back">
					<Backend />
					<SkillListElement category="backend" />
				</div>
				<div className="skill-grid-tools">
					<Tools />
					<SkillListElement category="tools" />
				</div>
			</div>
		</section>
	);
}
