export default function Backend() {
	return (
		<div className="flex items-center icon-gap text-17">
			<div
				className="w-10 h-10 rounded-lg color-green flex items-center justify-center"
				style={{
					willChange: 'transform, opacity',
					backfaceVisibility: 'hidden',
					transform: 'none',
					backgroundColor: '#22c55e1a',
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
					className="lucide lucide-server h-5 w-5 text-green-500"
					aria-hidden="true"
				>
					<rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
					<rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
					<line x1="6" x2="6.01" y1="6" y2="6"></line>
					<line x1="6" x2="6.01" y1="18" y2="18"></line>
				</svg>
			</div>
			Backend
		</div>
	);
}
