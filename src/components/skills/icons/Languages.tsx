export default function Languages() {
	return (
		<div className="flex items-center icon-gap text-17">
			<div
				className="w-10 h-10 p-2 rounded-lg color-yellow flex items-center justify-center"
				style={{
					willChange: 'transform, opacity',
					backfaceVisibility: 'hidden',
					transform: 'none',
					backgroundColor: '#eab3081a',
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
					className="lucide lucide-case-sensitive h-5 w-5 text-yellow-500"
					aria-hidden="true"
				>
					<path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"></path>
					<path d="M22 9v7"></path>
					<path d="M3.304 13h6.392"></path>
					<circle cx="18.5" cy="12.5" r="3.5"></circle>
				</svg>
			</div>
			Languages
		</div>
	);
}
