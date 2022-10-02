import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import CreateEventButton from "./CreateEventButton";
import Button from "react-bootstrap/esm/Button";
import CardEvent from "./CardEvent";
function Home() {
  return (
    <div>
      <Container className="text-center ">
        <Row className="home ">
          <Col sm={7}>
            <CardEvent />
          </Col>
          <Col sm={5} className="my-5">
            <Header />
            <CreateEventButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
