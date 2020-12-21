
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

## Crud Operation Endpoint for posts 
#### Get All post
- `http://yourdomain.com/wp-json/wp/v2/posts`

#### Post
- `http://yourdomain.com/wp-json/wp/v2/posts`

#### Edit
- `http://yourdomain.com/wp-json/wp/v2/posts/id`

#### Delete
- `http://yourdomain.com/wp-json/wp/v2/posts/id`


