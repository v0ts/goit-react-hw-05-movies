import { useState, useEffect } from 'react'
import { Title } from '../../Components/Title/Title'
import { MoviesList } from '../../Components/MoviesList/MoviesList'

 const Main = () => {
	const [moviesData, setMoviesData] = useState([])

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI0YmQ0MWY2MWNkYTljNjg1NzA5ZjhjZjNiYTQ2ZCIsIm5iZiI6MTc1NjQ4OTA2My4xOTcsInN1YiI6IjY4YjFlNTY3ZDA4YWFkYmMwZjllMTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03GLifvdR2e5u2GP6kaWY0Zj2pTPijHRbShkFaA59Gc',
		},
	}

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/trending/all/day?language=en-US',
			options
		)
			.then((res) => res.json())
			.then((res) => setMoviesData(res.results))
			.catch((err) => console.error(err))
	}, [])

	return (
		<main>
			<Title title='Trending today' />
			<MoviesList movies={moviesData} />
		</main>
	)
}

export default Main