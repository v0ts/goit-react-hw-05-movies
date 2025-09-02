import style from './Search.module.css'

export const Search = ({ onSubmit }) => {
	return (
		<section className={style.search}>
			<form onSubmit={onSubmit} className={style.form}>
				<input type='text' name='query' id='query' className={style.input} />
				<button type='submit' className={style.button}>
					Search
				</button>
			</form>
		</section>
	)
}
