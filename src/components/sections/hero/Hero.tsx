import { useEffect, useState } from 'react';
import { bubbleBackground } from '../../../assets/ClassNames';
import BubbleBackground from '../../bubbles/background/BubbleBackground';
import { heroTitle, type HeroTitleType } from '../../../types/languages/hero';
import { useParams } from 'react-router';

export default function Hero() {
	const [title, setTitle] = useState<HeroTitleType>(heroTitle.en);

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setTitle(heroTitle[lang as keyof typeof heroTitle] || heroTitle.en);
	}, [lang]);
	return (
		<div>
			<div className="hero pb-sm" id="hero">
				<div className="canvas">
					<canvas
						className="connecting-dots"
						width="1007"
						height="551"
						style={{ display: 'block' }}
					></canvas>
				</div>
				<div className="heading">
					<div className="heading__line-1">
						<h1
							className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none text-center"
							style={
								{
									WebkitTextStroke: '2px rgba(255,255,255,0.6)',
									WebkitTextFillColor: 'transparent',
									left: '-1%',
									position: 'relative',
									marginBottom: '0',
									letterSpacing: '0.25px',
								} as any
							}
						>
							BAPTISTE
						</h1>
					</div>
					<div className="border-2 w-full border-default-theme br-2"></div>
					<div className="heading__line-1">{title.subtitle}</div>
				</div>
			</div>
			<BubbleBackground bgType={bubbleBackground} nb={400} />
		</div>
	);
}
