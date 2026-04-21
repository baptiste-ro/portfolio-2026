import { type AboutType } from '../../../types/languages/about';

export default function About({ paragraphsState }: { paragraphsState: AboutType }) {
	return (
		<section className="relative w-full min-h-[60vh] overflow-hidden bg-transparent border-t border-black/5 pb-sm">
			<div className="relative z-10 px-m md:px-12 gap-x-6">
				<div className="flex flex-start gap-10 flex-column text-lg md:text-xl font-light leading-relaxed space-y-8">
					<h3 className="flex flex-column flex-start md:text-[4.5vw] leading-[0.9] font-bold tracking-tighter uppercase font-sans white-text">
						HELLO
						<span className="text-[var(--color-secondary-theme)]">THERE !</span>
					</h3>
					{paragraphsState?.aboutParagraphs.map((paragraph, index) => (
						<p key={index} className="text-left text-large white-text pb-1">
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
