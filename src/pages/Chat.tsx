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
    // unpacking chat data state
    const [messages, setMessages] = React.useState([
        {
            sender: "bWcWyIpEjkPqtn39eRdvuU9focm1",
            body: "This is a message",
            timestamp: firebase.firestore.Timestamp.now()
        },
        {
            sender: "not my uid",
            body: "This is another message",
            timestamp: firebase.firestore.Timestamp.now()
        }
    ]);

    // unpacking room text state
    const [roomText, setRoomText] = React.useState("");

    // unpacking room state (to see if user chose a chat room yet)
    const [room, setRoom] = React.useState("");

    // unpacking chat bar text
    const [body, setBody] = React.useState("");

    // unpack state for border color (for focusing)
    const [roomBorderColor, setRoomBorderColor] = React.useState({
        borderColor: "#ddd"
    });

    // unpack state for border color (for focusing)
    const [chatBorderColor, setChatBorderColor] = React.useState({
        borderColor: "#ddd"
    });

    // helper method for handling onBlur()
    const onBlurChat = () => {
        // set state to normal border color
        setChatBorderColor({
            borderColor: "#ddd"
        });
    };

    // helper method for handling onFocus()
    const onFocusChat = () => {
        // set state to focused blue border color
        setChatBorderColor({
            borderColor: "#5D6EE4"
        });
    };

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

    // helper method for handling enter key on password field
    const onChatKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // check if enter key
        if (e.key === "Enter") {
            // append to messages
            setMessages([
                ...messages,
                {
                    sender: firebase.auth().currentUser!.uid,
                    body: body,
                    timestamp: firebase.firestore.Timestamp.now()
                }
            ]);

            // clear text field
            setBody("");
        }
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
            const listItems = messages.map((message, index) => (
                <Row
                    className={
                        message.sender === firebase.auth().currentUser!.uid
                            ? "justify-content-end"
                            : "justify-content-start"
                    }
                    key={index}
                >
                    <Col xs={10} md={5}>
                        {message.body}
                    </Col>
                </Row>
            ));

            return (
                <>
                    <Container fluid></Container>
                    {listItems}
                    <Navbar fixed="bottom">
                        <TextField
                            placeholder="Type here..."
                            value={body}
                            type="text"
                            style={{
                                ...styles.input,
                                ...chatBorderColor,
                                boxShadow:
                                    "15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff"
                            }}
                            onChange={e => setBody(e.target.value)}
                            onBlur={() => onBlurChat()}
                            onFocus={() => onFocusChat()}
                            onKeyPress={e => onChatKeyPress(e)}
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
