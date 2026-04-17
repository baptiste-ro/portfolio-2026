import './App.css';
import Hero from './components/hero/Hero';
import BubbleBackground from './components/bubbles/background/BubbleBackground';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import { lightDashesBackground } from './assets/ClassNames';

function App() {
	return (
		<>
			<Hero />
			<NavBar />
			<BubbleBackground bgType={lightDashesBackground} nb={1000} />
			<About />
		</>
	);
}

export default App;
