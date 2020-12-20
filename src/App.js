import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GetPost from './features/getPost/getData';
import './App.css';
import Header from './component/header/Header';
import Create from './features/createPost/CreatePost';
import Login from './features/LoginPage/Login';
import Post from './features/post/PostPage'
import Edit from './features/edit/Edit'
function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<GetPost />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/create">
						<Create />
					</Route>
					<Route exact path="/post/:id">
						<Post />
					</Route>
					<Route exact path="/post/edit/:id">
						<Edit />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
