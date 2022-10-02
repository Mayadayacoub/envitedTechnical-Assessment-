import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import birthdayCake from "../images/Birthday cake.png";
import { BsCalendar2Date } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
function EventDetail() {
  const [formValues, setFormValues] = useState({
    eventName: "",
    hostName: "",
    dateAndTime: "",
    location: "",
  });
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    const blog = { eventName, hostName, date };
    console.log(blog);
  }
  return (
    <div>
      <Container className="text-center my-5 ">
        <Row>
          <Col sm={7}>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload Event Photo
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
          </Col>
          <Col sm={5}>
            <form onSubmit={handleSubmit}>
              <div>
                <h3>Event name</h3>
                <input
                  type="text"
                  required
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
              <div>
                <h3>Host name</h3>
                <input
                  type="text"
                  required
                  value={hostName}
                  onChange={(e) => setHostName(e.target.value)}
                />
              </div>

              <div>
                <h3>Start and End time/date</h3>
                <BsCalendar2Date className="mx-2" />
                <p> {date}</p>
                <input
                  type="datetime-local"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <h3>Location</h3>
                <ImLocation />
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Link
                to={{
                  pathname: "/confirmation",
                  state: eventName,
                }}
              >
                <button>Submit</button>
              </Link>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventDetail;
