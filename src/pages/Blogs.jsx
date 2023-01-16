import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blog1 from "../images/blogs/blog1.jpg";
import blogpost from "../images/blogs/blogpost.jpg";
import blogpost2 from "../images/blogs/blogpost2.jpg";
import classes from "./Blogs.module.css";

const Blogs = () => {
  return (
    <React.Fragment>
      <h1 className='text-center text-decoration-underline py-4'>Blogs</h1>
      <Container className={classes.container}>
        <Row className={classes.row}>
          <Col className={classes.col13}>
            <div className={classes.blogDetailImage}>
              <img
                src={blog1}
                className={`'rounded' ${classes.blog1}`}
                alt='...'
              />
            </div>
          </Col>
          {/* <Col className={classes.col2} md='auto'>Variable width content</Col> */}
          <Col className={classes.col33} xs lg='4'>
            <div className={classes.blogpost}>
              <img className={classes.blogpostimg1} src={blogpost} alt='...' />
              <img className={classes.blogpostimg2} src={blogpost2} alt='...' />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Blogs;
