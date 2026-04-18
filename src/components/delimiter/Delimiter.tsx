export default function Delimiter({ anchor }: { anchor: string }) {
	return (
		<div
			className="flex flex-row w-full items-center gap-1 px-10 py-sm"
			id="about"
		>
			<h2 className="text-2xl font-bold shrink-0">{anchor}</h2>
			<div className="border-2 w-full border-default-theme grow-1 flat-line br-2"></div>
		</div>
	);
}
