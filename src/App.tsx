import React from "react";
import "./App.css";
import { Card, TextField, Button } from "./components";
import { Container, Row, Col } from "react-bootstrap";

// for styles
import { styles } from "./styles/global";

function App() {
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
                      <Col style={styles.leftAdjustedTextCol}>
                        <header style={styles.h3}>Email</header>
                      </Col>
                      <Col xs={12}>
                        <TextField
                          placeholder={"Email"}
                          value={"Email"}
                          type={"email"}
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
                      <Col style={styles.leftAdjustedTextCol}>
                        <header style={styles.h3}>Password</header>
                      </Col>
                      <Col xs={12}>
                        <TextField
                          placeholder={"Password"}
                          value={"Password"}
                          type={"password"}
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
