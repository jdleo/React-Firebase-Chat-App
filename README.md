## Getting Started

The only thing you need to run your own version of this project is Firebase and Heroku.  
Here are the steps for getting started:  
1. Go to Firebase Console, create an app
2. Make a new file in the root directory of this project called .env.local and paste the following contents:
```bash
REACT_APP_FIREBASE_API_KEY="xxx"
REACT_APP_FIREBASE_AUTH_DOMAIN="xxx"
REACT_APP_FIREBASE_DATABASE_URL="xxx"
REACT_APP_FIREBASE_PROJECT_ID="xxx"
REACT_APP_FIREBASE_STORAGE_BUCKET="xxx"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="xxx"
REACT_APP_FIREBASE_APP_ID="xxx"
REACT_APP_FIREBASE_MEASUREMENT_ID="xxx"
```
(where 'xxx' are the values from your Firebase App)  
3. Go to Heroku, make a new app, and set these same config variables (you don't have to do this step if you uncomment `.env.local` from `.gitignore`)  
4. Set the Heroku buildpack to
```bash
heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git
```
5. deploy  
  
## Firestore Security Rules  
  
Set up your Firestore security rules as follows  
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rooms {
    
      // any authenticated user can query a room
      allow get: if request.auth.uid != null;
      
      // nobody can query LIST of rooms
      allow list: if false;
      
      match /rooms/{roomId} {
      	// anybody can create rooms
      	allow create: if request.auth.uid != null;
      
      	// nobody can delete rooms
      	allow delete: if false;
      }
    }
  }
}
```  
  
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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
