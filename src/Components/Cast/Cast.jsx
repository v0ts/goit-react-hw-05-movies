import style from './Cast.module.css'

export const Cast = ({ data }) => {
	return (
		<section className={style.castSection}>
			<ul className={style.list}>
				{data.map((actor) => (
					<li key={actor.id} className={style.item}>
						<img
							className={style.img}
							src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
						/>
						<div className={style.box}>
							<p className={style.name}>{actor.name}</p>
							<p className={style.character}>Character: {actor.character}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
