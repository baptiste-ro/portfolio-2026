import About from '../../components/sections/about/About';
import Delimiter from '../../components/delimiter/Delimiter';
import Hero from '../../components/sections/hero/Hero';
import Skills from '../../components/sections/skills/Skills';
import Projects from '../../components/sections/projects/Projects';
import Contact from '../../components/sections/contact/Contact';
import { delimiter, type DelimiterType } from '../../types/languages/delimiter';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/sections/header/header';

export default function Portfolio() {
	const [delimiters, setDelimiters] = useState<DelimiterType>();

	const { lang } = useParams() as { lang: string };

	useEffect(() => {
		setDelimiters(delimiter[lang as keyof typeof delimiter] || delimiter.en);
	}, [lang]);

	return (
		<>
			<Header />
			<Hero />
			<Delimiter anchor="about" text={delimiters?.about || ''} />
			<About />
			<Delimiter anchor="skills" text={delimiters?.skills || ''} />
			<Skills />
			<Delimiter anchor="projects" text={delimiters?.projects || ''} />
			<Projects />
			<Delimiter anchor="contact" text={delimiters?.contact || ''} />
			<Contact />
		</>
	);
}
