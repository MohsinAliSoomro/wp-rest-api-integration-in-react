import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/Layout';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import style from '../LoginPage/LoginPage.module.css';
function CreatePost() {
	const [ title, setTitle ] = useState('');
	const [ content, setContent ] = useState('');
	const [ message, setMessage ] = useState({ success: 'Publish', message: '' });
	const history = useHistory();
	useEffect(() => {
		if (!localStorage.getItem('token')) {
			history.push('login');
		}
	});
	const Logout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		localStorage.removeItem('user_nicename');
		localStorage.removeItem('user_email');
		localStorage.removeItem('user_display_name');
		history.push('login');
	};
	const postData = (e) => {
		setMessage({ success: 'Process', message: 'Request is processing...' });
		e.preventDefault();
		const formdata = {
			title: title,
			content: content,
			status: 'publish'
		};
		axios
			.post('http://www.holandi.nl/wp-json/wp/v2/posts', formdata, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then((res) => {
				setMessage({ success: 'Success', message: 'Successfully created...' });
				setContent('');
				setTitle('');
			})
            .catch((err) => {
                setMessage({success:"Error",message:"Something wrong here"})
            });
	};
	return (
		<Layout>
            <div>
                {message.message && <p>{ message.message}</p>}
				<div>
					<h1>Information</h1>
					<h5>{localStorage.getItem('user_nicename')}</h5>
					<h5>{localStorage.getItem('user_email')}</h5>
					<h5>{localStorage.getItem('user_display_name')}</h5>
				</div>

				<form style={{ textAlign: 'center' }} onSubmit={postData}>
					<input
						className={style.input}
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="title"
					/>
					<br />
					<textarea
						rows="3"
						className={style.input}
						type="text"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						placeholder="content"
					/>
					<br />
					<button className={style.btn_login} type="submit">
						{message.success}
					</button>
				</form>

				<button onClick={Logout}>Logout</button>
			</div>
		</Layout>
	);
}

export default CreatePost;
