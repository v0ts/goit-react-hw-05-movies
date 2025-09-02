import { NavLink, Outlet } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
	return (
		<>
			<header className={style.header}>
				<ul className={style.list}>
					<li className={style.item}>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : `${style.link}`)}
						>
							Home
						</NavLink>
					</li>
					<li className={style.item}>
						<NavLink
							to='/Movies'
							className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : `${style.link}`)}
						>
							Movies
						</NavLink>
					</li>
				</ul>
			</header>
			<Outlet />
		</>
	)
}

export default Header