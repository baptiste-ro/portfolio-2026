import type { TranslateLanguagesType } from '../../types/languages/translate';

interface Props {
	translateButton: React.RefObject<HTMLDivElement | null>;
	translateLanguages: TranslateLanguagesType;
	handleLanguageChange: (languageCode: string) => void;
	visibilityToggle: () => void;
}

export default function TranslateButton({
	translateButton,
	translateLanguages,
	handleLanguageChange,
	visibilityToggle,
}: Props) {
	return (
		<div className="nav-link translate-container" onClick={visibilityToggle}>
			<div ref={translateButton} className="translate-icons">
				<div className="translate-icon">
					<span className="_80pc top-n15">
						{translateLanguages.current.text}
					</span>{' '}
					<span className="_20pc material-icons">translate</span>
				</div>
				{translateLanguages.others.map(language => (
					<div
						key={language.code}
						className="translate-icon dark-purple-hover"
						onClick={() => handleLanguageChange(language.code)}
					>
						<span className="_80pc top-n15">{language.text}</span>{' '}
						<span className="_20pc material-icons">translate</span>
					</div>
				))}
			</div>
		</div>
	);
}
