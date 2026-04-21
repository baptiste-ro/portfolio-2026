import { Link } from 'react-router';
import TranslateButton from '../../translate-button/TranslateButton';
import type { HeaderSectionsType } from '../../../types/languages/header';
import type { TranslateLanguagesType } from '../../../types/languages/translate';

interface Props {
	sections: HeaderSectionsType;
	translateLanguages: TranslateLanguagesType;
	translateButton: React.RefObject<HTMLDivElement | null>;
	scrollToSection: (
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => void;
	handleHomeClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	handleLanguageChange: (languageCode: string) => void;
	translateButtonVisibilityToggle: () => void;
}

export default function Header({
	sections,
	translateLanguages,
	translateButton,
	scrollToSection,
	handleHomeClick,
	handleLanguageChange,
	translateButtonVisibilityToggle,
}: Props) {
	return (
		<header
			className="dynamic-header fixed z-10000 top-0 left-0 z-20 flex justify-center px-4 md:px-5 transition-transform duration-300"
			style={{
				transition: 'width 0.5s ease, max-width 0.5s ease',
				justifySelf: 'center',
			}}
		>
			<div
				id="nav-container"
				className="container mx-auto mt-3 rounded nav-box bg-dark/70 backdrop-blur-md transition-colors duration-300"
			>
				<nav className="flex fex-row flex-row lg:flex-row justify-between lg:items-center px-1 py-1 lg:py-2.5 lg:px-2.5 w-full h-full">
					<div className="flex flex-row justify-between items-center lg:w-auto px-1 lg:px-0">
						<Link
							to="/"
							className="no-underline home-link"
							style={{ color: '#FFFFFF' }}
						>
							Baptiste Royer
						</Link>
					</div>
					<div
						id="mobile-menu"
						className="flex lg:items-center lg:flex-row items-center gap-4 px-1 lg:px-0 lg:py-0 lg:w-auto flex"
					>
						<a
							href="#"
							onClick={handleHomeClick}
							className="nav-link-active home-link"
						>
							{sections.home}
						</a>
						{sections.links.map((link, index) => (
							<a
								key={index}
								href={`#${link.id}`}
								onClick={e => scrollToSection(e, link.id)}
								className="nav-link home-link"
							>
								{link.label}
							</a>
						))}
						<TranslateButton
							translateButton={translateButton}
							translateLanguages={translateLanguages}
							handleLanguageChange={handleLanguageChange}
							visibilityToggle={translateButtonVisibilityToggle}
						/>
					</div>
				</nav>
			</div>
		</header>
	);
}
