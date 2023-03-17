import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import template from "../images/template1.png";
function CarrdPage() {
  return (
    <Link to="/form">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={template} />
        <Card.Body>
          <Card.Title>Basic UI Template </Card.Title>
        </Card.Body>
      </Card>
    </Link>
    // </Link>
  );
}

export default CarrdPage;
