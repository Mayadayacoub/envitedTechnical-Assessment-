import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import popCorn from "../images/popcorn.png";
function CardEvent() {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={popCorn} />
        <h3>Movie night</h3>
        <p className="hostName">
          Hosted by <span>Elysia</span>
        </p>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="goBackButton">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardEvent;
