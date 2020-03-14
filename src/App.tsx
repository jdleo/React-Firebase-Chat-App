import React from "react";

// import pages
import { Login, Chat } from "./pages";

// firebase
import firebase from "./config/firebase";

const App: () => React.ReactElement = () => {
    // unpack state for authenticated
    const [loggedIn, setLoggedIn] = React.useState(false);

    // listen on auth state changed
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        // check if signed in
        if (user) {
            // set flag
            setLoggedIn(true);
        } else {
            // set flag
            setLoggedIn(false);
        }
    });

    // return appropriate screen based on current auth status
    if (loggedIn) {
        unsubscribe();
        return <Chat />;
    } else {
        return <Login />;
    }
};

export default App;
