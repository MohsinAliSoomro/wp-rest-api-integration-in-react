import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetPost } from './getDataSlice';
import Layout from '../../component/layout/Layout';
import style from './getData.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function GetDataPage() {
	const getPost = useSelector((state) => state.getData);
	const dispatch = useDispatch();

	const GetAllPost = () => {
		dispatch(fetchGetPost());
	};

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			GetAllPost();
		}
		return () => (mounted = false);
	}, []);

	if (getPost.loading === true) {
		return <div>Loading...</div>;
	}

	console.log(getPost);
	
	return (
		<Layout>
			<Link to="/create" className={style.btn_primary} style={{ float: 'right', margin: '10px' }}>
				Create
			</Link>
			<h1 style={{ marginLeft: '18px' }}>Posts</h1>
			<div style={{ fontSize: '20px', padding: '10px', marginBottom: '10px' }}>
				{!getPost.loading && getPost.post.length > 0 ? (
					getPost.post[0].map((post) => {
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
