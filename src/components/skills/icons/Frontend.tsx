export default function Frontend() {
	return (
		<div className="flex items-center icon-gap text-17">
			<div
				className="w-10 h-10 rounded-lg color-blue flex items-center justify-center"
				style={{
					willChange: 'transform, opacity',
					backfaceVisibility: 'hidden',
					transform: 'none',
					backgroundColor: '#3b82f61a',
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
					className="lucide lucide-code h-5 w-5 text-blue-500"
					aria-hidden="true"
				>
					<path d="m16 18 6-6-6-6"></path>
					<path d="m8 6-6 6 6 6"></path>
				</svg>
			</div>
            Frontend
		</div>
	);
}
