import style from './ReviewsList.module.css'

export const ReviewsList = ({ data }) => {
	return (
		<section className={style.reviews}>
			<ul className={style.list}>
				{data &&
					data.map((review) => (
						<li key={review.id} className={style.item}>
							<h3 className={style.author}>Author: {review.author}</h3>
							<p className={style.content}>{review.content}</p>
						</li>
					))}
			</ul>
		</section>
	)
}
