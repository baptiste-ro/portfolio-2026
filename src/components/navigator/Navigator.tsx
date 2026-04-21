import { Routes, Route, Navigate, useParams } from 'react-router';
import Project from '../../pages/project/Project';
import Portfolio from '../../pages/portfolio/Portfolio';
import { useEffect } from 'react';

export default function Navigator() {
	const params = useParams();

	useEffect(() => {
		localStorage.setItem('lang', params.lang?.replaceAll('/', '') || 'en');
	}, [params.lang]);

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/en" replace />} />
			<Route path="/:lang" element={<PageWrapper />} />
			<Route path="/project" element={<Project />} />
		</Routes>
	);
}

function PageWrapper() {
	const lang = localStorage.getItem('lang') || 'en';

	// Optional: validate allowed languages
	const supported = ['en', 'fr', 'de'];
	if (!supported.includes(lang || '')) {
		return <Navigate to="/en" replace />;
	}

	return <Portfolio />;
}
