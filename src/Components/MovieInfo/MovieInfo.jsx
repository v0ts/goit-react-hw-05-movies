import { Link, useNavigate } from 'react-router-dom'
import style from './MovieInfo.module.css'

export const MovieInfo = ({ data }) => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<section className={style.info}>
			{data?.original_title && (
				<>
					<img
						className={style.img}
						src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
						alt={data.original_title}
					/>
					<div className={style.description}>
						<button
							onClick={handleGoBack}
							className={style.backButton}
							type='button'
						>
							Go back
						</button>
						<div className={style.general}>
							<h2 className={style.title}>
								{data.original_title} ({data.release_date.slice(0, 4)})
							</h2>
							<p className={style.score}>
								User Score: {Math.floor(data.vote_average)}
							</p>
						</div>
						<div className={style.overview}>
							<h3 className={style.overviewName}>Overview</h3>
							<p className={style.overviewTitle}>{data.overview}</p>
						</div>
						<div className={style.genres}>
							<h3 className={style.genresName}>Genres</h3>
							<p className={style.genresTitle}>
								{data.genres.map((item) => (
									<span key={item.id}>{item.name} </span>
								))}
							</p>
						</div>
						<div className={style.line}></div>
						<div className={style.additionalInfo}>
							<h2>Additional Information: </h2>
							<div className={style.additionalBox}>
								<Link className={style.link} to='cast'>
									Cast
								</Link>
								<Link className={style.link} to='reviews'>
									Reviews
								</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	)
}
