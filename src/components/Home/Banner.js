"use client";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";

import "./Banner.css";

function Banner({ screenWidth }) {
  //   const lang = useSelector((state) => state.carousel);
  //   let cl = useSelector((state) => state.changeLang); //cl varaible for change langues shortcut

  return (
    <>
      <Row className="section">
        <Col
          className="d-flex justify-content-center align-items-center"
          xl="6"
          xxl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <img src="/images/me.jpeg" />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          xl="6"
          xxl="6"
          lg="6"
          md="6"
          sm="12"
          xs="12"
        >
          <div className="">
            <h1 className="d-block text-center">Full Stack Developer</h1>
            <h1 className="d-block text-center">I'm Alzubair Mohammed </h1>
            <br />
            <p className="text-center">
              Full stack developer and JavaScript developer
            </p>
            <Button className="rounded-pill hireBtn">Hire me</Button>
            <Button className="rounded-pill mx-2" variant="outline-secondary">
              More info
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Banner;
