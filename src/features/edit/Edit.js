import React, { useEffect, useState } from 'react';
import Layout from '../../component/layout/Layout';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import style from '../LoginPage/LoginPage.module.css';
import { useParams }from 'react-router-dom'
function CreatePost() {
    const { id } = useParams();
    const [post,setPost]=useState()
	const [ title, setTitle ] = useState();
	const [ content, setContent ] = useState();
	const [ message, setMessage ] = useState({ success: 'Publish', message: '' });
	const history = useHistory();
	useEffect(() => {
		if (!localStorage.getItem('token')) {
			history.push('login');
        }
        else {
            axios
			.get('http://www.holandi.nl/wp-json/wp/v2/posts/' + id)
			.then((res) => {
				if (res === undefined) {
					return '';
				}
                setPost(res.data);
                setTitle(res.data.title.rendered)
                setContent(res.data.content.rendered)
			})
			.catch((err) => console.log(err));
        }
	},[id]);
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
			.post('http://www.holandi.nl/wp-json/wp/v2/posts/'+id, formdata, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then((res) => {
				setMessage({ success: 'Success', message: 'Successfully edited...' });
				setContent('');
				setTitle('');
			})
			.catch((err) => {
				setMessage({ success: 'Error', message: 'Something wrong here' });
			});
    };
    console.log('edit=>',post)
	return (
		<Layout>
			<div>
				{message.message && <p>{message.message}</p>}
<h1 style={{textAlign:'center'}}>Edit</h1>
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
