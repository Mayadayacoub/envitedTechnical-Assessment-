import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function CreateEventButton() {
  return (
    <div>
      <Link to="/eventDetail">
        <Button className="createEventButton"> 🎉Create Event</Button>
      </Link>
    </div>
  );
}

export default CreateEventButton;
