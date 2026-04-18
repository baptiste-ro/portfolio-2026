export default function Tools() {
	return (
		<div className="flex items-center icon-gap text-17">
			<div
				className="w-10 h-10 rounded-lg color-azure flex items-center justify-center"
				style={{
					willChange: 'transform, opacity',
					backfaceVisibility: 'hidden',
					transform: 'none',
					backgroundColor: '#14b8a61a',
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
					className="lucide lucide-wrench h-5 w-5 text-teal-500"
					aria-hidden="true"
				>
					<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>
				</svg>
			</div>
			Tools & Technologies
		</div>
	);
}
