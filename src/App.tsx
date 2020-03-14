import React from "react";

// import pages
import { Login, Chat } from "./pages";

// firebase
import firebase from "./config/firebase";

const App: () => React.ReactElement = () => {
    // attempt to get current user
    const user = firebase.auth().currentUser;

    // check if signed in
    if (user) {
        // go to chat
        return <Chat />;
    } else {
        // go to login
        return <Login />;
    }
};

export default App;
