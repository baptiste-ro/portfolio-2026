import { Routes, Route } from 'react-router';
import Project from '../../pages/project/Project';
import Portfolio from '../../pages/portfolio/Portfolio';

export default function Navigator() {
	return (
		<Routes>
			<Route path="/" element={<Portfolio />} />
			{/* <Route path="/about" element={<Portfolio />} /> */}
			<Route path="/project" element={<Project />} />
			<Route path="/projects" element={<Portfolio />} />
			<Route path="/contact" element={<Portfolio />} />
			<Route path="/translate" element={<Portfolio />} />
		</Routes>
	);
}
