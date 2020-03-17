import React from "react";
import { Button, TextField, Bubble } from "../components";
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

// for colors
const colors = [
    "#f44336",
    "#e53935",
    "#d32f2f",
    "#c62828",
    "#b71c1c",
    "#e91e63",
    "#d81b60",
    "#c2185b",
    "#ad1457",
    "#880e4f",
    "#9c27b0",
    "#8e24aa",
    "#7b1fa2",
    "#6a1b9a",
    "#4a148c",
    "#673ab7",
    "#5e35b1",
    "#512da8",
    "#4527a0",
    "#311b92",
    "#3f51b5",
    "#3949ab",
    "#303f9f",
    "#283593",
    "#1a237e",
    "#4caf50",
    "#43a047",
    "#388e3c",
    "#2e7d32",
    "#1b5e20"
];

interface IProps {}

function Chat({}: IProps): React.ReactElement {
    // unpack state for loading
    const [loading, setLoading] = React.useState(false);

    // unpacking chat data state
    const [messages, setMessages] = React.useState([
        {
            sender: "bWcWyIpEjkPqtn39eRdvuU9focm1",
            body: "This is a message",
            timestamp: firebase.firestore.Timestamp.now()
        },
        {
            sender: "rEFvQL0fodWQFwqf4asef",
            body: "This is another message",
            timestamp: firebase.firestore.Timestamp.now()
        }
    ]);

    // a data store for which users correspond to which colors
    const [userColors, setUserColors] = React.useState({
        [firebase.auth().currentUser!.uid]: "#e0e0e0"
    });

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
            // make sure not empty
            if (body !== "") {
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
        }
    };

    // helper method for rendering color based on sender
    const renderBubbleColor: (sender: string) => string = (sender: string) => {
        console.log(userColors);
        // check if sender in user colors
        if (sender in userColors) {
            // return color
            return userColors[sender];
        } else {
            // create a random color for this sender
            setUserColors({
                ...userColors,
                [sender]: colors[Math.floor(Math.random() * colors.length)]
            });

            // return new color
            return userColors[sender];
        }
    };

    // helper method for handling room selection
    const handleRoomSelection = () => {
        // set the room
        setRoom(roomText);
    }

    // check if room is set
    if (room !== "") {
        // listen for messages
        firebase.firestore().collection("rooms").doc(room).collection("messages")
    }

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
                                onClick={() => handleRoomSelection()}
                                disabled={loading}
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
                    <Col xs={12}>
                        <Bubble
                            sender={message.sender.substring(0,5)}
                            color={renderBubbleColor(message.sender)}
                            textColor={
                                message.sender ===
                                firebase.auth().currentUser!.uid
                                    ? "#000"
                                    : "#fff"
                            }
                            alignment={
                                message.sender ===
                                firebase.auth().currentUser!.uid
                                    ? "right"
                                    : "left"
                            }
                        >
                            {message.body}
                        </Bubble>
                    </Col>
                </Row>
            ));

            return (
                <>
                    <Container fluid>{listItems}</Container>
                    
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
                                                    .signOut().then(() => {})
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
