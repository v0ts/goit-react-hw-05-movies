import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cast as CastList } from '../../Components/Cast/Cast.jsx'

const Cast = () => {
	const movieId = useParams().movieId
	const [data, setData] = useState({})

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI0YmQ0MWY2MWNkYTljNjg1NzA5ZjhjZjNiYTQ2ZCIsIm5iZiI6MTc1NjQ4OTA2My4xOTcsInN1YiI6IjY4YjFlNTY3ZDA4YWFkYmMwZjllMTI1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03GLifvdR2e5u2GP6kaWY0Zj2pTPijHRbShkFaA59Gc',
		},
	}

	fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
		options
	)
		.then((res) => res.json())
		.then((res) => setData(res))
		.catch((err) => console.error(err))

	return <section>{data.cast && <CastList data={data.cast} />}</section>
}

export default Cast
