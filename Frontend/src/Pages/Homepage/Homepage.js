import React from "react";
import Navbarcomp from "../../Components/Navbarcomp/Navbarcomp";
import Slidercomp from "../../Components/Slidercomp/Slidercomp";
import Cardcomp from "../../Components/Cardcomp/Cardcomp";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Homepage() {
  return (
    <>
      <Navbarcomp />
      <Slidercomp />
      <div className="title_product">Our Products</div>
      <br />
      <div className="product_display">
        <Cardcomp /> <Cardcomp /> <Cardcomp /> <Cardcomp /> <Cardcomp />{" "}
        <Cardcomp /> <Cardcomp /> <Cardcomp />
      </div>
      <Container>
      <Row className="footer" >
        <Col className="footercol">Copyright @ Winkle</Col>
      </Row>
    </Container>
    </>
  );
}
