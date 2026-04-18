export default function SkillElement({
	skill,
	backgroundColor,
}: {
	skill: string;
	backgroundColor: string;
}) {
	return (
		<div
			className="rounded-lg white-text flex items-center justify-center skill-element skill-list-elt"
			style={{
				willChange: 'transform, opacity',
				backfaceVisibility: 'hidden',
				transform: 'none',
				backgroundColor: backgroundColor,
			}}
			onMouseEnter={e => {
				e.currentTarget.style.transform = 'scale(1.05)';
				e.currentTarget.style.transition = 'transform 0.2s';
				e.currentTarget.style.backgroundColor = `${backgroundColor.substring(0, 7)}66`;
			}}
			onMouseLeave={e => {
				e.currentTarget.style.transform = 'none';
				e.currentTarget.style.transition = 'transform 0.2s';
				e.currentTarget.style.backgroundColor = `${backgroundColor.substring(0, 7)}1a`;
			}}
		>
			{skill}
		</div>
	);
}
