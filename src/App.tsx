import { Routes, Route } from 'react-router-dom'

// ---

import { Home, About } from './pages'


// ---

export default function App() {
	return (
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
	)
}
