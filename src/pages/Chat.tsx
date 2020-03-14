import React from "react";
import { Card, TextField, Button } from "../components";
import { Container, Row, Col } from "react-bootstrap";

// for styles
import { styles } from "../styles/global";

// firebase
import firebase from "../config/firebase";

interface IProps {}

function Chat({}: IProps): React.ReactElement {
    return (
        <div style={styles.container}>
            <p>
                Hello, from <code>Chat.tsx</code>
            </p>
            <Button
                title="Log Out"
                onClick={() =>
                    firebase
                        .auth()
                        .signOut()
                        .catch(err => {})
                }
            />
        </div>
    );
}

export default Chat;
