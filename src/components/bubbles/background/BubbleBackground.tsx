import { useEffect, useRef } from 'react';
import Bubble from '../bubble/Bubble';

export default function BubbleBackground({
	bgType,
	nb,
}: {
	bgType: string;
	nb?: number;
}) {
	const container = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (container.current) {
			const cleanup = Bubble(container.current, nb);
			return cleanup;
		}
	}, []);

	return <canvas ref={container} className={bgType}></canvas>;
}
