import { Link, useParams } from 'react-router';
import type { Project } from '../../../../types/types';
import { useEffect, useState } from 'react';
import { viewProject, type ViewProjectType } from '../../../../types/languages/projects';

export default function SingleProject({
	image,
	title,
	description,
	link,
}: Project) {

	const [viewLink, setViewLink] = useState<ViewProjectType>(viewProject.en);

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setViewLink(viewProject[lang as keyof typeof viewProject] || viewProject.en);
	}, [lang]);

	return (
		<div
			className="w-32 bg-black-semi rounded-lg flex flex-col"
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'scale(1.05)';
				e.currentTarget.style.transition = 'transform 0.2s';
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'none';
				e.currentTarget.style.transition = 'transform 0.2s';
			}}
		>
			<img
				src={image}
				alt="No image for display"
				className="w-full object-cover img-height rounded-top-lg"
			/>
			<div className="p-2r description-height flex flex-column gap-xsm">
				<p className="text-lg font-bold font-3 text-justify white-text">
					{title}
				</p>
				<p className="font-1/75 line-1/25 text-justify description-text">
					{description}
				</p>
				<Link
					to={link}
					target="_blank"
					className="faint-gray-border font-1/75 p-1r gap-xsm flex justify-center rounded-md"
				>
					{viewLink.text}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-external-link mr-1"
						aria-hidden="true"
					>
						<path d="M15 3h6v6"></path>
						<path d="M10 14 21 3"></path>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
					</svg>
				</Link>
			</div>
		</div>
	);
}
