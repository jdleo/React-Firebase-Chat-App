import React from "react";
import { Card, TextField, Button } from "../components";
import { Container, Row, Col } from "react-bootstrap";

// for styles
import { styles } from "../styles/global";

// firebase
import firebase from "../config/firebase";

interface IProps {
    
}

function Chat({}: IProps): React.ReactElement {
    return (
        <div>
            I am the chat page
        </div>
    )
}

export default Chat;
