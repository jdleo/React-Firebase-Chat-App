import React from "react";
import "./App.css";
import { Card } from "./components";
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
              <header style={styles.h1}>Login</header>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
