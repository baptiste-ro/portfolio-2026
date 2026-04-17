import { Link } from 'react-router';
import TranslateButton from '../translate-button/TranslateButton';
import { useEffect, useRef } from 'react';

export default function Header() {
	const header = useRef<HTMLHeadElement>(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (header.current != null && window.scrollY > 200) {
				header.current.classList.add('dynamic-header-small');
			} else {
				header.current!.classList.remove('dynamic-header-small');
			}
		});
	}, []);

	return (
		<header
			className="dynamic-header fixed z-10000 top-0 left-0 z-20 flex justify-center px-4 md:px-5 transition-transform duration-300"
			style={{
				transition: 'width 0.5s ease, max-width 0.5s ease',
				justifySelf: 'center',
			}}
			ref={header}
		>
			{' '}
			<div
				id="nav-container"
				className="container mx-auto mt-3 rounded nav-box bg-dark/70 backdrop-blur-md transition-colors duration-300"
			>
				{' '}
				<nav className="flex fex-row flex-row lg:flex-row justify-between lg:items-center px-1 py-1 lg:py-2.5 lg:px-2.5 w-full h-full">
					{' '}
					<div className="flex flex-row justify-between items-center lg:w-auto px-1 lg:px-0">
						{' '}
						<Link
							to="/"
							className="no-underline home-link"
							style={{ color: '#FFFFFF' }}
						>
							Baptiste Royer
						</Link>{' '}
					</div>{' '}
					<div
						id="mobile-menu"
						className="flex lg:items-center lg:flex-row items-center gap-4 px-1 lg:px-0 lg:py-0 lg:w-auto flex"
					>
						{' '}
						<Link to="/" className="nav-link-active home-link">
							Home
						</Link>{' '}
						<Link to="/projects" className="nav-link home-link">
							Projects
						</Link>{' '}
						<Link to="/contact" className="nav-link home-link">
							Contact
						</Link>{' '}
						<TranslateButton />
					</div>{' '}
				</nav>{' '}
			</div>{' '}
		</header>
	);
}
