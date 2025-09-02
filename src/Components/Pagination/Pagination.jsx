import style from './Pagination.module.css'

export const Pagination = ({ page, maxPages, nextPage, prevPage }) => {
	return (
			<ul className={style.list}>
				{page !== 1 ? (
					<li className={style.item}>
						<button type='button' className={style.button} onClick={prevPage}>
							Prev page
						</button>
					</li>
				) : null}
				{page !== maxPages ? (
					<li className={style.item}>
						<button type='button' className={style.button} onClick={nextPage}>
							Next page
						</button>
					</li>
				) : null}
			</ul>
	)
}
