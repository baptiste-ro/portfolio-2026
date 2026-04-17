import { bubbleBackground } from '../../assets/ClassNames';
import BubbleBackground from '../bubbles/background/BubbleBackground';

export default function Hero() {
	return (
		<div>
			<div className="hero" id="hero">
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
						<span className="test">Welcome !</span>
					</div>
					<div className="heading__line-1">
						I'm <span>Baptiste</span>.
					</div>
					<div className="heading__line-2">
						I'm a student in Computer Science.
					</div>
				</div>
			</div>
			<BubbleBackground bgType={bubbleBackground} nb={400} />
		</div>
	);
}
