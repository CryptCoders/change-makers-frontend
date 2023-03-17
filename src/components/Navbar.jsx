import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import "../css/navbar.css";
function Navbarw() {
  return (
    <>
       <Navbar className='navbar' style={{fontFamily: 'Poppins'}} bg="primary" variant="dark">
        <Container className='container'>
          <Navbar.Brand href="/">CHANGE MAKERS</Navbar.Brand>
          <Nav className='links'>
            <Nav.Link href="#home">SignUp</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default Navbarw;

