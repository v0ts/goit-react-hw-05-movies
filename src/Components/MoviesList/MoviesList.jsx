import { Link } from 'react-router-dom'
import style from './MoviesList.module.css'

export const MoviesList = ({ movies }) => {
	return (
		<ul className={style.list}>
			{movies.map((movie) => (
				<li key={movie.id} className={style.item}>
					<Link to={`/movies/${movie.id}`} className={style.link}>
						<img
							className={style.img}
							src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
							alt={movie.title || movie.name}
						/>
						<span className={style.span}>{movie.title || movie.name}</span>
					</Link>
				</li>
			))}
		</ul>
	)
}
