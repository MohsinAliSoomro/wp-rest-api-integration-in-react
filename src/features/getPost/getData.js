import { useEffect, useState } from 'react';
import Layout from '../../component/layout/Layout';
import style from './getData.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function GetDataPage() {
	const [ posts, setPost ] = useState([]);

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			axios
				.get('http://www.holandi.nl/wp-json/wp/v2/posts')
				.then((res) => {
					setPost(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		return () => (mounted = false);
	}, []);

	if (posts.length === 0) {
		return <div>Loading...</div>;
	}

	console.log(posts);

	return (
		<Layout>
			<Link to="/create" className={style.btn_primary} style={{ float: 'right', margin: '10px' }}>
				Create
			</Link>
			<h1 style={{ marginLeft: '18px' }}>Posts</h1>
			<div style={{ fontSize: '20px', padding: '10px', marginBottom: '10px' }}>
				{posts.length > 0 ? (
					posts.map((post) => {
						if (post === undefined) {
							return '';
						}
						return (
							<div className={style.post} key={post.id}>
								<Link to={`/post/${post.id}`}>
									<p>
										Title : <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />{' '}
									</p>

									<p>
										Content : <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
									</p>
								</Link>
							</div>
						);
					})
				) : (
					<div>Loading...</div>
				)}
			</div>
		</Layout>
	);
}

export default GetDataPage;
