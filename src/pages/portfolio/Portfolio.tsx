import About from '../../components/about/About';
import Delimiter from '../../components/delimiter/Delimiter';
import Hero from '../../components/hero/Hero';
import Skills from '../../components/skills/Skills';

export default function Portfolio() {
	return (
		<>
			<Hero />
			<Delimiter anchor="about" text="About me" />
			<About />
			<Delimiter anchor="skills" text="Skills" />
			<Skills />
			<Delimiter anchor="projects" text="Projects" />
		</>
	);
}
