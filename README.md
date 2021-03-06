
# Wp-Api integration in reactjs app
The react app is integrated with wp rest api and crud operation on the posts


:point_right: :heavy_heart_exclamation: :point_left:

##### Deploy [Demo](http://wp-api-site.surge.sh/)


![App](https://github.com/MohsinAliSoomro/wp-rest-api-integration-in-react/blob/master/src/records.gif?raw=true)


Run Commands
```
npm install
npm start
```

You need a plugin 

JWT Auth – WordPress JSON Web Token Authentication.
WordPress JSON Web Token Authentication allows you to do REST API authentication via token. It is a simple, non-complex, and easy to use. This plugin probably is the most convenient way to do JWT Authentication in WordPress.
by useful team

Active the plugin   

# steps 

#### Open the .htaccess file in root folder of wordpress and paste 


- `RewriteCond %{HTTP:Authorization} ^(.*)`
- `RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]`
- `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`


#### Open the wp-config.php file in root folder of wordpress and paste 
get the secret key from given link or you put your own
[Generate secret](https://api.wordpress.org/secret-key/1.1/salt/)


- `define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');`
- `define('JWT_AUTH_CORS_ENABLE', true);`

Now you get endpoint for authentication
- `http://yourdomain.com/wp-json/jwt-auth/v1/token`

```
const loginData = {
			username: "Username",
			password: "Password"
		};
axios.post('http://yourdomain/wp-json/jwt-auth/v1/token', loginData)
	.then((res) => {
	    console.log(res.data);
		localStorage.setItem('token', res.data.token);
		localStorage.setItem('user_nicename', res.data.user_nicename);
		localStorage.setItem('user_email', res.data.user_email);
		localStorage.setItem('user_display_name', res.data.user_display_name);
	})
	.catch((err) => {
	    console.log(err);
	});
```

## Crud Operation Endpoint for posts 

##### Using axios
Promise based HTTP client for the browser and node.js

#### Get All post
- `http://yourdomain.com/wp-json/wp/v2/posts`
```
axios.get('http://yourdomain/wp-json/wp/v2/posts')
	.then((res) => {
        console.log(res.data)	
	})
	.catch((err) => {
		console.log(err);
});
```

#### Post
- `http://yourdomain.com/wp-json/wp/v2/posts`
```
const formdata = {
	title: title,
	content: content,
	status: 'publish'
};
        
axios.post('http://yourdomain/wp-json/wp/v2/posts', formdata, {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`
				}
	})
	.then((res) => {
		console.log(res);			
	})
    .catch((err) => {
        console.log(err)
});
```

#### Edit
- `http://yourdomain.com/wp-json/wp/v2/posts/id`
```
const formdata = {
	title: title,
	content: content,
	status: 'publish'
};
axios.post('http://yourdomain/wp-json/wp/v2/posts/'+id, formdata, {
    headers: {
	    'Content-Type': 'application/json',
	    'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(res);
});
```


#### Delete
- `http://yourdomain.com/wp-json/wp/v2/posts/id`
```
axios.delete('http://yourdomain/wp-json/wp/v2/posts/' + id, {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
});
```

