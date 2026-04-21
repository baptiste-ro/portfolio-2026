import { useEffect, useState } from 'react';
import { texts, type AboutType } from '../../../types/languages/about';
import { useParams } from 'react-router';

export default function About() {
	const [paragraphs, setParagraphs] = useState<AboutType>();

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setParagraphs(texts[lang as keyof typeof texts] || texts.en);
	}, [lang]);

	return (
		<section className="relative w-full min-h-[60vh] overflow-hidden bg-transparent border-t border-black/5 pb-sm">
			<div className="relative z-10 px-m md:px-12 gap-x-6">
				<div className="flex flex-start gap-10 flex-column text-lg md:text-xl font-light leading-relaxed space-y-8">
					<h3 className="flex flex-column flex-start md:text-[4.5vw] leading-[0.9] font-bold tracking-tighter uppercase font-sans white-text">
						HELLO
						<span className="text-[var(--color-secondary-theme)]">THERE !</span>
					</h3>
					{paragraphs?.paragraphs.map((paragraph, index) => (
						<p key={index} className="text-left text-large white-text pb-1">
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
