import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { useHistory } from 'react-router-dom';
function Header() {
	const history = useHistory();
	const handleLogout = (e) => {
		e.preventDefault();
		history.push('login');
		localStorage.removeItem('token');
		localStorage.removeItem('user_nicename');
		localStorage.removeItem('user_email');
		localStorage.removeItem('user_display_name');
		
	};
	return (
		<div className={style.header}>
			<div className={style.link}>
				<Link to="/">Home</Link>
				{localStorage.getItem('token') ? (
					<button onClick={handleLogout} className={style.btn_logout}>
						Logout
					</button>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		</div>
	);
}

export default Header;
