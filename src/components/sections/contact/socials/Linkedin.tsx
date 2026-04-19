import { Link } from 'react-router';

export default function Linkedin() {
	return (
		<Link
			to="https://www.linkedin.com/in/baptiste-royer-2a98472a1/"
			target="blank"
			className="flex items-start gap-sm p-1 rounded-lg backdrop-blur-md transition-colors contact-hover"
			tabIndex={0}
			style={{
				willChange: 'transform, opacity',
				backfaceVisibility: 'hidden',
				transform: 'none',
				opacity: 1,
			}}
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'scale(1.02)';
				e.currentTarget.style.transition = 'transform 0.2s';
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'none';
				e.currentTarget.style.transition = 'transform 0.2s';
			}}
		>
			<div
				className="w-10 h-10 bg-dark-10 rounded-lg flex items-center justify-center flex-shrink-0"
				style={{
					willChange: 'transform, opacity',
					backfaceVisibility: 'hidden',
					transform: 'translateZ(0px)',
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
					className="lucide lucide-linkedin mr-2 h-4 w-4"
					aria-hidden="true"
				>
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
					<rect width="4" height="12" x="2" y="9"></rect>
					<circle cx="4" cy="4" r="2"></circle>
				</svg>
			</div>
			<div className="flex-1 min-w-0">
				<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
					Linkedin
				</h3>
				<p className="font-1/75 line-1/25 text-left description-text weight-xs">
					Baptiste Royer
				</p>
			</div>
		</Link>
	);
}
