import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
const Header = lazy(() => import('./Components/Header/Header.jsx'))
const Main = lazy(() => import('./Pages/Main/Main.jsx'))
const Movies = lazy(() => import('./Pages/Movies/Movies.jsx'))
const Redirect = lazy(() => import('./Components/Redirect/Redirect.jsx'))
const Movie = lazy(() => import('./Pages/Movie/Movie.jsx'))
const Cast = lazy(() => import('./Pages/Cast/Cast.jsx'))
const Reviews = lazy(() => import('./Pages/Reviews/Reviews.jsx'))

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<Main />} />
					<Route path='movies' element={<Movies />} />
					<Route path='movies/:movieId' element={<Movie />}>
						<Route path='cast' element={<Cast />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
					<Route path='*' element={<Redirect />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
