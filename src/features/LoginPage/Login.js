import React, { useState } from 'react';
import Layout from '../../component/layout/Layout';
import axios from 'axios';
import style from './LoginPage.module.css';
import { useHistory } from 'react-router-dom';
function Login() {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();
	const HandleLogin = (e) => {
		e.preventDefault();

		const loginData = {
			username: username,
			password: password
		};
		axios
			.post('http://www.holandi.nl/wp-json/jwt-auth/v1/token', loginData)
			.then((res) => {
				console.log(res.data);
				history.push('/create');
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('user_nicename', res.data.user_nicename);
				localStorage.setItem('user_email', res.data.user_email);
				localStorage.setItem('user_display_name', res.data.user_display_name);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Layout>
			<div className={style.login}>
				{/* {credentials.error && <p>{credentials.error}</p>} */}
				<h2>Login</h2>
				<form onSubmit={HandleLogin}>
					<input
						className={style.input}
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="username"
					/>
					<br />
					<input
						className={style.input}
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="password"
					/>
					<br />
					<button className={style.btn_login} type="submit">
						Login
					</button>
				</form>
			</div>
		</Layout>
	);
}

export default Login;
