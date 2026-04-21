import { useEffect, useState } from 'react';
import projectsData from '../../../assets/data/projects.json';
import SingleProject from './single-project/SingleProject';
import type { Project } from '../../../types/types';
import { useParams } from 'react-router';
import type { ProjectsType } from '../../../types/languages/projects';
import { projects } from '../../../types/languages/projects';

export default function Projects() {
	const [projectsList, setProjects] = useState<Project[]>([]);

	const [title, setTitle] = useState<ProjectsType>(projects.en);

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setProjects(Object.values(projectsData.projects));
	}, []);

	useEffect(() => {
		setTitle(projects[lang as keyof typeof projects] || projects.en);
	}, [lang]);

	return (
		<section className="pb-sm px-sm w-full">
			<div className="title">
				<p className="leading-relaxed white-text pb-sm skill-title">
					{title.title}
				</p>
			</div>
			<div className="flex flex-wrap gap-smx row-gap-md">
				{projectsList.map(project => (
					<SingleProject key={project.title} {...project} />
				))}
			</div>
		</section>
	);
}
