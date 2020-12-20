import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function PostPage() {
	const history = useHistory();
	const [ post, setPost ] = useState();
	const [ message, setMessage ] = useState();
	const { id } = useParams();
	useEffect(() => {
		axios
			.get('http://www.holandi.nl/wp-json/wp/v2/posts/' + id)
			.then((res) => {
				if (res === undefined) {
					return '';
				}
				setPost(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(post);
	if (post === undefined) {
		return '';
	}
	const handleDelete = () => {
		axios
			.delete('http://www.holandi.nl/wp-json/wp/v2/posts/' + id, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then((res) => {
				setMessage('Deleted');
				history.push('/');
			})
			.catch((err) => {
				setMessage('Something wrong here');
			});
	};
	return (
		<div>
			{message}
			<button onClick={handleDelete}>Delete</button>
			<Link to={`/post/edit/${id}`}>Edit</Link>
			{post.title.rendered === 'undefined' && post.content.rendered === 'undefined' ? (
				<div>Something wrong here</div>
			) : (
				<div>
					<h1>
						Title : <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />{' '}
					</h1>
					<h1>
						Content : <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />{' '}
					</h1>
				</div>
			)}
		</div>
	);
}

export default PostPage;
