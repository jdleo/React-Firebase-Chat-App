import React from "react";
import { Button } from "../components";
import {
    Container,
    Row,
    Col,
    Navbar,
    OverlayTrigger,
    Popover
} from "react-bootstrap";

// for styles
import { styles } from "../styles/global";

// firebase
import firebase from "../config/firebase";

interface IProps {}

function Chat({}: IProps): React.ReactElement {
    return (
        <div>
            <Navbar sticky="top">
                <Navbar.Brand href="#">Chat App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as:{" "}
                        <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={
                                <Popover id={`popover-positioned-botttom`}>
                                    <Popover.Content>
                                        <Button
                                            title="Log out"
                                            onClick={() =>
                                                firebase
                                                    .auth()
                                                    .signOut()
                                                    .catch(err => {})
                                            }
                                            disabled={false}
                                            width={200}
                                        />
                                    </Popover.Content>
                                </Popover>
                            }
                        >
                            <a href="#">{firebase.auth().currentUser!.email}</a>
                        </OverlayTrigger>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <p>
                Hello, from <code>Chat.tsx</code>
            </p>
        </div>
    );
}

export default Chat;
