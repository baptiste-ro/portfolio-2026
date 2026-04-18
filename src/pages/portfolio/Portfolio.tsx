import About from '../../components/about/About';
import Delimiter from '../../components/delimiter/Delimiter';
import Hero from '../../components/hero/Hero';
import Skills from '../../components/skills/Skills';

export default function Portfolio() {
	return (
		<>
			<Hero />
			<Delimiter anchor="About me" />
			<About />
			<Delimiter anchor="Skills" />
			<Skills />
		</>
	);
}
