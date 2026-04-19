export default function Phone() {
	return (
		<div
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
					className="lucide lucide-phone h-5 w-5 text-primary"
					aria-hidden="true"
				>
					<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
				</svg>
			</div>
			<div className="flex-1 min-w-0">
				<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
					Mobile
				</h3>
				<p className="font-1/75 line-1/25 text-left description-text weight-xs">
					+33 7 88 69 57 95
				</p>
			</div>
		</div>
	);
}
