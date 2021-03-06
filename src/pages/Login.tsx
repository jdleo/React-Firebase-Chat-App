import React from "react";
import { Card, TextField, Button } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import { Chat } from ".";

// for styles
import { styles } from "../styles/global";

// firebase
import firebase from "../config/firebase";

function Login(): React.ReactElement {
    // unpack state for border color (for focusing)
    const [emailBorderColor, setEmailBorderColor] = React.useState({
        borderColor: "#ddd"
    });

    // unpack state for border color (for focusing)
    const [passwordBorderColor, setPasswordBorderColor] = React.useState({
        borderColor: "#ddd"
    });

    // unpack state for email
    const [email, setEmail] = React.useState("");

    // unpack state for password
    const [password, setPassword] = React.useState("");

    // unpack state for error
    const [error, setError] = React.useState("");

    // unpack state for loading
    const [loading, setLoading] = React.useState(false);

    // unpack state for authenticated
    const [loggedIn, setLoggedIn] = React.useState(false);

    // listen on auth state changed
    firebase.auth().onAuthStateChanged(user => {
        // check if signed in
        if (user) {
            // set flag
            setLoggedIn(true);
        } else {
            // set flag
            setLoggedIn(false);
        }
    });

    // helper method for handling onBlur() : text field 1
    const onBlurEmail = () => {
        // set state to normal border color
        setEmailBorderColor({
            borderColor: "#ddd"
        });
    };

    // helper method for handling onFocus()
    const onFocusEmail = () => {
        // set state to focused blue border color
        setEmailBorderColor({
            borderColor: "#5D6EE4"
        });
    };

    // helper method for handling onBlur() : text field 1
    const onBlurPassword = () => {
        // set state to normal border color
        setPasswordBorderColor({
            borderColor: "#ddd"
        });
    };

    // helper method for handling onFocus()
    const onFocusPassword = () => {
        // set state to focused blue border color
        setPasswordBorderColor({
            borderColor: "#5D6EE4"
        });
    };

    // helper method for handling text change
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // check input type
        if (e.target.type === "email") {
            // update email text
            setEmail(e.target.value);
        } else {
            // update password text
            setPassword(e.target.value);
        }
    };

    // helper method for handling login click
    const onClick = () => {
        // set loading
        setLoading(true);

        // attempt login w/ email + password
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                // clear loading
                setLoading(false);
            })
            .catch(err => {
                // check if error is user not found
                if (err.code === "auth/user-not-found") {
                    // attempt to create user
                    firebase
                        .auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(res => {
                            // clear loading
                            setLoading(false);
                        })
                        .catch(err => {
                            // set error
                            setError(err.message);

                            // clear loading
                            setLoading(false);
                        });
                } else {
                    // set error
                    setError(err.message);

                    // clear loading
                    setLoading(false);
                }
            });
    };

    // helper method for handling enter key on password field
    const onPasswordEnterKeyPress = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        // check if enter key
        if (e.key === "Enter") {
            onClick();
        }
    };

    // check if logged in first
    if (loggedIn) {
        // just push to <Chat/>
        return <Chat />;
    }

    return (
        <div style={styles.container}>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={11} md={6}>
                        <Card>
                            <Container fluid>
                                {/* Main Header Row */}
                                <Row className="justify-content-center">
                                    <Col xs={12}>
                                        <header style={styles.h1}>Login</header>
                                    </Col>
                                </Row>
                                {/* Email Row (Label and Text Field) */}
                                <Row className="justify-content-center">
                                    <Col xs={11} md={6}>
                                        <Row>
                                            <Col
                                                style={
                                                    styles.leftAdjustedTextCol
                                                }
                                            >
                                                <header style={styles.h3}>
                                                    Email
                                                </header>
                                            </Col>
                                            <Col xs={12}>
                                                <TextField
                                                    placeholder={"Email"}
                                                    value={email}
                                                    type={"email"}
                                                    style={{
                                                        ...styles.input,
                                                        ...emailBorderColor
                                                    }}
                                                    onFocus={() =>
                                                        onFocusEmail()
                                                    }
                                                    onBlur={() => onBlurEmail()}
                                                    onChange={e => onChange(e)}
                                                    onKeyPress={() => {
                                                        return;
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                {/* Password Row (Label and Text Field) */}
                                <Row className="justify-content-center">
                                    <Col xs={11} md={6}>
                                        <Row>
                                            <Col
                                                style={
                                                    styles.leftAdjustedTextCol
                                                }
                                            >
                                                <header style={styles.h3}>
                                                    Password
                                                </header>
                                            </Col>
                                            <Col xs={12}>
                                                <TextField
                                                    placeholder={"Password"}
                                                    value={password}
                                                    type={"password"}
                                                    style={{
                                                        ...styles.input,
                                                        ...passwordBorderColor
                                                    }}
                                                    onFocus={() =>
                                                        onFocusPassword()
                                                    }
                                                    onBlur={() =>
                                                        onBlurPassword()
                                                    }
                                                    onChange={e => onChange(e)}
                                                    onKeyPress={e =>
                                                        onPasswordEnterKeyPress(
                                                            e
                                                        )
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                {/* Error Message Row */}
                                <Row
                                    className="justify-content-center"
                                    style={{
                                        display: error === "" ? "none" : "block"
                                    }}
                                >
                                    <Col xs={12}>
                                        <p style={{ color: "#f44336" }}>
                                            {error}
                                        </p>
                                    </Col>
                                </Row>
                                {/* Login Button Row */}
                                <Row className="justify-content-center">
                                    <Col xs={7} md={4}>
                                        <Button
                                            title={"Log In"}
                                            onClick={() => onClick()}
                                            disabled={loading}
                                        />
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                {/* Helper Message Row */}
                                <Row className="justify-content-center">
                                    <Col xs={11}>
                                        <p style={{ color: "#5D6EE4" }}>
                                            If you don't have an account, one
                                            will be created
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
