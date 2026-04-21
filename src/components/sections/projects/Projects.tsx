import SingleProject from './single-project/SingleProject';

interface Props {
	title: string;
	viewProject: string;
	projects: {
		title: string;
		description: string;
		link: string;
		image: string;
		github: string;
	}[];
}

export default function Projects({ title, viewProject, projects }: Props) {
	return (
		<section className="pb-sm px-sm w-full">
			<div className="title">
				<p className="leading-relaxed white-text pb-sm skill-title">{title}</p>
			</div>
			<div className="flex flex-wrap gap-smx row-gap-md">
				{projects.map(project => (
					<SingleProject key={project.title} {...project} viewProject={viewProject} />
				))}
			</div>
		</section>
	);
}
