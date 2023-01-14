import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "./img.jpg";
import classes from "./TextImage.module.css";

const TextImage2 = () => {
  return (
    <React.Fragment>
      <div className={classes.imageWithText}>
        <Container fluid>
          <Row>
            <Col md={6}>
              <div>
                <h1>Copy Writing</h1>
                <br />
                <h3>
                  I usually wtie the blogs of my own if you like please sign up{" "}
                </h3>
                <br />
                <br />
                <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere, aspernatur non. In qui consequuntur vel a velit
                  officia ratione minima, ipsum ut exercitationem praesentium,
                  est deserunt quo commodi, temporibus numquam.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.sideimage}>
                <img
                  className={classes.sideimageself}
                  src={image}
                  alt='sideimage'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default TextImage2;
