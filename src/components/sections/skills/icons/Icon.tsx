import parse from 'html-react-parser';
import React from 'react';

interface Props {
	title: string;
	color: string;
	background: string;
	icon: string[];
}

export default function Icon({ title, color, background, icon }: Props) {
	return (
		<div className="flex items-center icon-gap text-17">
			<div
				className="w-10 h-10 rounded-lg flex items-center justify-center"
				style={{
					willChange: 'transform, opacity',
					backfaceVisibility: 'hidden',
					transform: 'none',
					backgroundColor: background,
					color: color,
					borderRadius: '1rem',
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					{icon.map((svgString, index) => (
						<React.Fragment key={index}>{parse(svgString)}</React.Fragment>
					))}
				</svg>
			</div>
			{title}
		</div>
	);
}
