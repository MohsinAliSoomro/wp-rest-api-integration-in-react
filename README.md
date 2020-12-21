
# Wp-Api integration in reactjs app
The react app is integrated with wp rest api and crud operation on the posts
:point_right: :heavy_heart_exclamation: :point_left:
![App](https://github.com/MohsinAliSoomro/wp-rest-api-integration-in-react/blob/master/src/records.gif?raw=true)
##### Deploy
[Demo](http://wp-api-site.surge.sh/)

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

Crud Operation Endpoint for posts 
#### Get All post
- `http://www.holandi.nl/wp-json/wp/v2/posts`

#### Post
- `http://www.holandi.nl/wp-json/wp/v2/posts`

#### Edit
- `http://www.holandi.nl/wp-json/wp/v2/posts/id`

#### Delete
- `http://www.holandi.nl/wp-json/wp/v2/posts/id`



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
