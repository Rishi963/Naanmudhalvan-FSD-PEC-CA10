import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Images/logo.png";
import Style from "../../Css/Style.css"
function Navbarcomp() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="40"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Winkle
        </Navbar.Brand>
        <div  className="navresponsive" >
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
