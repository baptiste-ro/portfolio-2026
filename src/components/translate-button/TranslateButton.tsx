import { useEffect, useRef } from 'react';

export default function TranslateButton() {
	const translateButton = useRef<HTMLDivElement>(null);

	function visibilityToggle() {
		if (translateButton.current) {
			translateButton.current.classList.toggle('translate-icons--active');
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (translateButton.current != null && window.scrollY > 200) {
				translateButton.current!.classList.remove('translate-icons--active');
			} else {
				translateButton.current!.classList.remove('translate-icons--active');
			}
		});
	}, []);

	return (
		<div className="nav-link translate-container" onClick={visibilityToggle}>
			<div
				ref={translateButton}
				className="translate-icons translate-icons--active"
			>
				<div className="translate-icon">
					<span className="_80pc top-n15">ENG</span>{' '}
					<span className="_20pc material-icons">translate</span>
				</div>
				<div className="translate-icon">
					<span className="_80pc top-n15">FRA</span>{' '}
					<span className="_20pc material-icons">translate</span>
				</div>
				<div className="translate-icon">
					<span className="_80pc top-n15">DEU</span>{' '}
					<span className="_20pc material-icons">translate</span>
				</div>
			</div>
		</div>
	);
}
