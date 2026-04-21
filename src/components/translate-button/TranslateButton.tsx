import { useEffect, useRef, useState } from 'react';
import { translateLanguages } from '../../types/languages/translate';
import type { TranslateLanguagesType } from '../../types/languages/translate';
import { useNavigate, useParams } from 'react-router';

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

	const [languages, setLanguages] = useState<TranslateLanguagesType>(
		translateLanguages.en
	);

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setLanguages(
			translateLanguages[lang as keyof typeof translateLanguages] ||
				translateLanguages.en
		);
	}, [lang]);

	const navigate = useNavigate();
	const handleLanguageChange = (languageCode: string) => {
		navigate(`/${languageCode}`);
	};

	return (
		<div className="nav-link translate-container" onClick={visibilityToggle}>
			<div ref={translateButton} className="translate-icons">
				<div className="translate-icon">
					<span className="_80pc top-n15">{languages.current.text}</span>{' '}
					<span className="_20pc material-icons">translate</span>
				</div>
				{languages.others.map(language => (
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
