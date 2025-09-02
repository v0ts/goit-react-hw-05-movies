import { useEffect, useMemo, useState } from 'react'
import { Title } from '../../Components/Title/Title'
import { MoviesList } from '../../Components/MoviesList/MoviesList'
import { Search } from '../../Components/Search/Search'
import { Pagination } from '../../Components/Pagination/Pagination'

 const Movies = () => {
	const [query, setQuery] = useState('')
	const [page, setPage] = useState(1)
	const [requestData, setRequestData] = useState([])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI0YmQ0MWY2MWNkYTljNjg1NzA5ZjhjZjNiYTQ2ZCIsIm5iZiI6MTc1NjQ4OTA2My4xOTcsInN1YiI6IjY4YjFlNTY3ZDA4YWFkYmMwZjllMTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03GLifvdR2e5u2GP6kaWY0Zj2pTPijHRbShkFaA59Gc',
			},
		}

		fetch(
			`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
			options
		)
			.then((res) => res.json())
			.then((res) => setRequestData(res))
			.catch((err) => console.error(err))
	}, [query, page])

	const handleSubmit = (e) => {
		e.preventDefault()
		setQuery(e.target.elements.query.value)
		setPage(1)
		e.target.reset()
	}

	const nextPage = () => {
		setPage((prev) => prev + 1)
	}

	const prevPage = () => {
		setPage((prev) => (prev === 1 ? 1 : prev - 1))
	}

	return (
		<main>
			<Title title='Search movie' />
			<Search onSubmit={handleSubmit} />
			<MoviesList movies={requestData?.results || []} />
			{query !== '' && requestData.results ? (
				<Pagination
					page={page}
					maxPages={requestData.total_pages}
					nextPage={nextPage}
					prevPage={prevPage}
				/>
			) : null}
		</main>
	)
}

export default Movies