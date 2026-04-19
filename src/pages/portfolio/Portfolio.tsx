import About from '../../components/sections/about/About';
import Delimiter from '../../components/delimiter/Delimiter';
import Hero from '../../components/sections/hero/Hero';
import Skills from '../../components/sections/skills/Skills';
import Projects from '../../components/sections/projects/Projects';

export default function Portfolio() {
	return (
		<>
			<Hero />
			<Delimiter anchor="about" text="About me" />
			<About />
			<Delimiter anchor="skills" text="Skills" />
			<Skills />
			<Delimiter anchor="projects" text="Projects" />
			<Projects />
		</>
	);
}
