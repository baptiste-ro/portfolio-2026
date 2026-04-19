export default function Mail() {
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
					className="lucide lucide-mail h-5 w-5 text-primary"
					aria-hidden="true"
				>
					<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
					<rect x="2" y="4" width="20" height="16" rx="2"></rect>
				</svg>
			</div>
			<div className="flex-1 min-w-0">
				<h3 className="font-1/75 line-1/25 text-left description-text weight-xlg">
					Email
				</h3>
				<p className="font-1/75 line-1/25 text-left description-text weight-xs">
					baptiste-royer@outlook.com
				</p>
			</div>
		</div>
	);
};
