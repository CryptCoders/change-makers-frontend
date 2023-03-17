import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import "../css/navbar.css";
import { Link, Navigate } from "react-router-dom";
function Navbarw() {
  const [user, setUser] = useState(false);
  const checkUser = async () => {
    console.log("token", localStorage.getItem("token"));
    const response = await fetch("http://127.0.0.1:8000/api/v1/currentUser", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json",
        withCredentials: true,
      },
    });
    const user_data = await response.json();
    if (user_data.code === 401) {
      console.log("Enter error");
      return <Navigate to="/signup" />;
    } else {
      setUser(true);
      return <Navigate to="/" />;
    }
  };
  useEffect(() => {
    checkUser();
  }, []);
  return (
    <>
      <Navbar
        className="navbar"
        style={{ fontFamily: "Poppins" }}
        bg="primary"
        variant="dark"
      >
        <Container className="container">
          <Navbar.Brand href="/">CHANGE MAKERS</Navbar.Brand>
          <Nav className="links">
            {user ? (
              <>
                <Nav.Link href="/yoursite">Your site</Nav.Link>
                <Nav.Link href="/login">Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/signup">SignUp</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarw;
