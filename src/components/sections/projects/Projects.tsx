import { useEffect, useState } from 'react';
import projectsData from '../../../assets/data/projects.json';
import SingleProject from './single-project/SingleProject';
import type { Project } from '../../../types/types';

export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		setProjects(Object.values(projectsData.projects));
	}, []);

	return (
		<section className="pb-sm px-sm w-full">
			<h2>Projects</h2>
			<div className="flex flex-wrap gap-smx row-gap-md">
				{projects.map(project => (
					<SingleProject key={project.title} {...project} />
				))}
			</div>
		</section>
	);
}
