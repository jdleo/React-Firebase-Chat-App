import * as firebase from "firebase";

// interface for firebase config dictionary
interface IFirebaseConfig {
    [key: string]: any;
}

//  config
const FirebaseConfig: IFirebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// initialize app
firebase.initializeApp(FirebaseConfig);

// export firebase sdk
export default firebase;
