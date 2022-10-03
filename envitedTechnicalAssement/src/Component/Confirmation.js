import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ImLocation } from "react-icons/im";
import { BsCalendar2Date } from "react-icons/bs";
function Confirmation() {
  const { state } = useLocation();
  const { eventName, hostName, date, location, preview } = state;
  console.log(eventName, hostName, date, location);
  return (
    <Card style={{ width: "18rem" }} className="text-center my-5">
      <Card.Img variant="top" src={preview} />
      <Card.Body>
        <Card.Text>
          <h3>Event Name </h3>
          <p>{eventName}</p>
          <h3>Host Name </h3>
          <p>{hostName}</p>
          <h3>
            {" "}
            <BsCalendar2Date className="mx-2" />
            Date and Time
          </h3>
          <p>{date}</p>
          <h3>
            {" "}
            <ImLocation />
            Location
          </h3>
          <p>{location}</p>
        </Card.Text>
        <Link to="/">
          <button className="btn goBackButton"> Go bACK hOME</button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Confirmation;
