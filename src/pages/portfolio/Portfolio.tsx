import About from '../../components/sections/about/About';
import Contact from '../../components/sections/contact/Contact';
import Delimiter from '../../components/delimiter/Delimiter';
import Hero from '../../components/sections/hero/Hero';
import Projects from '../../components/sections/projects/Projects';
import Skills from '../../components/sections/skills/Skills';

import {
	delimiterTitle,
	type DelimiterTitleType,
} from '../../types/languages/delimiter';
import { aboutParagraphs, type AboutType } from '../../types/languages/about';
import {
	headerSections,
	type HeaderSectionsType,
} from '../../types/languages/header';
import {
	translateLanguages,
	type TranslateLanguagesType,
} from '../../types/languages/translate';
import { projects, type ProjectsType } from '../../types/languages/projects';
import { skills, type SkillsType } from '../../types/languages/skills';
import { contact, type ContactType } from '../../types/languages/contact';

import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { heroTitle, type HeroTitleType } from '../../types/languages/hero';
import Header from '../../components/sections/header/Header';

export default function Portfolio() {
	// useStates of sections for json text implementations
	const [delimitersState, setDelimitersState] = useState<DelimiterTitleType>(
		delimiterTitle.en
	);
	const [aboutParagraphsState, setAboutParagraphsState] = useState<AboutType>(
		aboutParagraphs.en
	);
	const [headerSectionsState, setHeaderSectionsState] =
		useState<HeaderSectionsType>(headerSections.en);
	const [translateLanguagesState, setTranslateLanguagesState] =
		useState<TranslateLanguagesType>(translateLanguages.en);
	const [heroTitleState, setHeroTitleState] = useState<HeroTitleType>(
		heroTitle.en
	);
	const [skillListState, setSkillListState] = useState<SkillsType>(skills.en);
	const [projectsListState, setProjectsListState] = useState<ProjectsType>(
		projects.en
	);
	const [contactState, setContactState] = useState<ContactType>(contact.en);

	// useState for contact form fields

	const [phoneCode, setPhoneCode] = useState('+');
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const contactFormStates = {
		phoneCode: { value: phoneCode, setter: setPhoneCode },
		phone: { value: phone, setter: setPhone },
		name: { value: name, setter: setName },
		email: { value: email, setter: setEmail },
		message: { value: message, setter: setMessage },
	};

	// useRef for contact form fields

	const contactFormRefs = {
		phoneCode: useRef<HTMLInputElement>(null),
		phone: useRef<HTMLInputElement>(null),
		name: useRef<HTMLInputElement>(null),
		email: useRef<HTMLInputElement>(null),
		message: useRef<HTMLTextAreaElement>(null),
	};

	const translateButton = useRef<HTMLDivElement>(null);

	const { lang } = useParams() as { lang: string };
	const navigate = useNavigate();

	function handleLanguageChange(languageCode: string) {
		navigate(`/${languageCode}`);
	}

	function translateButtonVisibilityToggle() {
		if (translateButton.current) {
			translateButton.current.classList.toggle('translate-icons--active');
		}
	}

	function translateButtonBlur(event: MouseEvent) {
		if (
			translateButton.current &&
			!translateButton.current.contains(event.target as Node)
		) {
			translateButton.current.classList.remove('translate-icons--active');
		}
	}

	function scrollToSection(
		e: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) {
		e.preventDefault();
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function handlePhoneCodeChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length <= 4 && /^\+[0-9]*$/.test(e.target.value)) {
			setPhoneCode(e.target.value);
		}
		if (!e.target.value) {
			setPhoneCode('+');
		}
	}

	function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length <= 15 && /^[0-9]*$/.test(e.target.value)) {
			setPhone(e.target.value);
		}
	}

	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = {
			name: contactFormRefs.name.current?.value || '',
			email: contactFormRefs.email.current?.value || '',
			phone: `${contactFormRefs.phoneCode.current?.value} ${contactFormRefs.phone.current?.value}` || '',
			message: contactFormRefs.message.current?.value || '',
		};

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			const data: { success?: boolean; error?: string } = await res.json();

			if (data.success) {
				setName('');
				setEmail('');
				setPhone('');
				setMessage('');
			} else {
			}
		} catch (err) {}
	};

	window.addEventListener('scroll', () => {
		if (translateButton.current != null && window.scrollY > 200) {
			translateButton.current!.classList.remove('translate-icons--active');
		} else {
			translateButton.current!.classList.remove('translate-icons--active');
		}
	});

	document.addEventListener('click', translateButtonBlur);

	useEffect(() => {
		setDelimitersState(
			delimiterTitle[lang as keyof typeof delimiterTitle] || delimiterTitle.en
		);
		setAboutParagraphsState(
			aboutParagraphs[lang as keyof typeof aboutParagraphs] ||
				aboutParagraphs.en
		);
		setHeaderSectionsState(
			headerSections[lang as keyof typeof headerSections] || headerSections.en
		);
		setTranslateLanguagesState(
			translateLanguages[lang as keyof typeof translateLanguages] ||
				translateLanguages.en
		);
		setHeroTitleState(
			heroTitle[lang as keyof typeof heroTitle] || heroTitle.en
		);
		setSkillListState(skills[lang as keyof typeof skills] || skills.en);
		setProjectsListState(
			projects[lang as keyof typeof projects] || projects.en
		);
		setContactState(contact[lang as keyof typeof contact] || contact.en);
	}, [lang]);

	return (
		<>
			<Header
				sections={headerSectionsState}
				translateLanguages={translateLanguagesState}
				translateButton={translateButton}
				scrollToSection={scrollToSection}
				handleHomeClick={handleHomeClick}
				handleLanguageChange={handleLanguageChange}
				translateButtonVisibilityToggle={translateButtonVisibilityToggle}
			/>
			<Hero heroTitle={heroTitleState} />
			<Delimiter anchor="about" text={delimitersState?.about || ''} />
			<About paragraphsState={aboutParagraphsState} />
			<Delimiter anchor="skills" text={delimitersState?.skills || ''} />
			<Skills skillList={skillListState} />
			<Delimiter anchor="projects" text={delimitersState?.projects || ''} />
			<Projects
				title={projectsListState.title}
				viewProject={projectsListState.viewProject}
				projects={projectsListState.projects}
			/>
			<Delimiter anchor="contact" text={delimitersState?.contact || ''} />
			<Contact
				contact={contactState}
				useStates={contactFormStates}
				useRefs={contactFormRefs}
				handlePhoneCodeChange={handlePhoneCodeChange}
				handlePhoneChange={handlePhoneChange}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}
