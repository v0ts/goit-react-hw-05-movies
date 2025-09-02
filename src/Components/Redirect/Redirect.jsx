import style from './Redirect.module.css'
import { useNavigate } from 'react-router-dom'

const Redirect = () => {
	const navigate = useNavigate()

	setTimeout(() => {
		navigate('/')
	}, 5000)

	return (
		<section className={style.redirect}>
			<h2 className={style.error}>404 Page not found</h2>
			<p className={style.sorry}>
				Sorry, the page you are looking for does not exist :c
			</p>
			<p className={style.transfer}>You will be redirected in 5 seconds</p>
		</section>
	)
}

export default Redirect