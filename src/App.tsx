import './App.css';
import { BrowserRouter } from 'react-router';
import Navigator from './components/navigator/Navigator';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navigator />
			</BrowserRouter>
		</>
	);
}

export default App;
