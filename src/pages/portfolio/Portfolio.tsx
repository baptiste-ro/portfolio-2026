import About from '../../components/about/About';
import Delimiter from '../../components/delimiter/Delimiter';
import Hero from '../../components/hero/Hero';

export default function Portfolio() {
	return (
		<>
			<Hero />
			<Delimiter anchor="About me" />
			<About />
		</>
	);
}
