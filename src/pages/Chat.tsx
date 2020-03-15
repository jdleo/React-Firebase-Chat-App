import React from "react";
import { Button, TextField } from "../components";
import {
    Container,
    Row,
    Col,
    Navbar,
    OverlayTrigger,
    Popover
} from "react-bootstrap";

// firebase
import firebase from "../config/firebase";

// for styling
import { styles } from "../styles/global";

interface IProps {}

function Chat({}: IProps): React.ReactElement {
    // unpacking room text state
    const [roomText, setRoomText] = React.useState("");

    // unpacking room state (to see if user chose a chat room yet)
    const [room, setRoom] = React.useState("");

    // unpack state for border color (for focusing)
    const [roomBorderColor, setRoomBorderColor] = React.useState({
        borderColor: "#ddd"
    });

    // helper method for handling onBlur()
    const onBlurRoom = () => {
        // set state to normal border color
        setRoomBorderColor({
            borderColor: "#ddd"
        });
    };

    // helper method for handling onFocus()
    const onFocusRoom = () => {
        // set state to focused blue border color
        setRoomBorderColor({
            borderColor: "#5D6EE4"
        });
    };

    // helper method for conditionally rendering chat container
    const renderContainer = () => {
        // check if room hasn't been set
        if (room === "") {
            return (
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={11} md={6}>
                            <TextField
                                placeholder="Enter room code..."
                                value={roomText}
                                type="text"
                                style={{ ...styles.input, ...roomBorderColor }}
                                onChange={e => setRoomText(e.target.value)}
                                onBlur={() => onBlurRoom()}
                                onFocus={() => onFocusRoom()}
                                onKeyPress={() => {
                                    return;
                                }}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-center">
                        <Col xs={11} md={6}>
                            <Button
                                title="Enter Room"
                                onClick={() => setRoom(roomText)}
                                disabled={false}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-center">
                        <Col xs={11} md={6}>
                            <p style={{ color: "#5D6EE4" }}>
                                If the room code doesn't exist yet, it will be
                                created.
                            </p>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            const listItems = [...Array(250)].map(i => (
                <div key={i}>
                    Room code is <code>{room}</code>
                    <br/>
                </div>
            ));

            return (
                <>
                    {listItems}
                    <Navbar fixed="bottom">
                        <TextField
                            placeholder="Type here..."
                            value={roomText}
                            type="text"
                            style={{ ...styles.input, ...roomBorderColor, boxShadow: "15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff"}}
                            onChange={e => setRoomText(e.target.value)}
                            onBlur={() => onBlurRoom()}
                            onFocus={() => onFocusRoom()}
                            onKeyPress={() => {
                                return;
                            }}
                        />
                    </Navbar>
                </>
            );
        }
    };

    return (
        <div>
            <Navbar sticky="top" bg="light">
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
            <div style={styles.container}>{renderContainer()}</div>
        </div>
    );
}

export default Chat;
