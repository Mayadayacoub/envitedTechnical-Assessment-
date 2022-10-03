import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import birthdayCake from "../images/Birthday cake.png";
import { BsCalendar2Date } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import Confirmation from "./Confirmation";

function EventDetail() {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  function handlePhotoChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const filePreviw = URL.createObjectURL(e.target.files[0]);
    setPreview(filePreviw);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const blog = { eventName, hostName, date, location };

    console.log(blog);
    navigate("/confirmation", {
      state: {
        eventName: eventName,
        hostName: hostName,
        location: location,
        date: date,
        preview: preview,
      },
    });
  }

  return (
    <div>
      <Container className="text-center my-5 ">
        {true ? (
          <Row>
            <Col sm={7}>
              <div className="mb-3  ">
                <label htmlFor="formFile" className="form-label">
                  <h3>Upload Event Photo</h3>
                </label>
                {file && (
                  <img
                    src={preview}
                    alt={file.name}
                    width="300px"
                    className="rounded my-3"
                  />
                )}
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="file"
                  onChange={handlePhotoChange}
                />
              </div>
            </Col>
            <Col sm={5}>
              <form onSubmit={handleSubmit} className="">
                <h3>Event name</h3>
                <FloatingLabel controlId="floatingInput" className="mb-3">
                  <Form.Control
                    type="text"
                    required
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </FloatingLabel>

                <div>
                  <h3>Host name</h3>
                  <FloatingLabel controlId="floatingInput" className="mb-3">
                    <Form.Control
                      type="text"
                      required
                      value={hostName}
                      onChange={(e) => setHostName(e.target.value)}
                    />
                  </FloatingLabel>
                </div>

                <div>
                  <h3>
                    {" "}
                    <BsCalendar2Date className="mx-2" />
                    Start and End time/date
                  </h3>
                  <FloatingLabel controlId="floatingInput" className="mb-3">
                    <Form.Control
                      type="datetime-local"
                      re="true"
                      required
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </FloatingLabel>
                </div>
                <div>
                  <h3>
                    {" "}
                    <ImLocation />
                    Location{" "}
                  </h3>

                  <FloatingLabel controlId="floatingInput" className="mb-3">
                    <Form.Control
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </FloatingLabel>
                </div>

                <Link to="/confirmation" state={{ foo: "bar" }}></Link>
                <button type="submit" className=" btn goBackButton my-4">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        ) : (
          <Confirmation data={eventName} />
        )}
      </Container>
    </div>
  );
}

export default EventDetail;
