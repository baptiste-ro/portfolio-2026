import './App.css';
import Header from './components/sections/header/header';
import { BrowserRouter } from 'react-router';
import Navigator from './components/navigator/Navigator';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Navigator />
			</BrowserRouter>
		</>
	);
}

export default App;
