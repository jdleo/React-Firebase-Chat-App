import React from "react";
import "./App.css";
import { Card, TextField, Button } from "./components";
import { Container, Row, Col } from "react-bootstrap";

// for styles
import { styles } from "./styles/global";

// firebase
import firebase from "./config/firebase";

function App() {
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
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <br />
                                {/* Login Button Row */}
                                <Row className="justify-content-center">
                                    <Col xs={7} md={4}>
                                        <Button title={"Log In"} />
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

export default App;
