import * as firebase from "firebase";

// interface for firebase config dictionary
interface IFirebaseConfig {
    [key: string]: any;
}

//  config
const FirebaseConfig: IFirebaseConfig = {
    apiKey: "xxxxx",
    authDomain: "xxxxx",
    databaseURL: "xxxxx",
    projectId: "xxxxx",
    storageBucket: "xxxxx",
    messagingSenderId: "xxxxx",
    appId: "xxxxx",
    measurementId: "xxxxx"
};

// initialize app
firebase.initializeApp(FirebaseConfig);

// export firebase sdk
export default firebase;
