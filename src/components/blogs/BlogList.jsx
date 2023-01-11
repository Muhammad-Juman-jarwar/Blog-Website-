import React from "react";
import Card from "react-bootstrap/Card";
import BlogImage1 from "./iguana.jpg";
import classes from "./Blog.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const BlogList = () => {
  return (
    <React.Fragment>
      <Card className={classes.BloglistCard}>
        <Card.Img
          className={classes.BlogImageCard}
          variant='top'
          src={BlogImage1}
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural
            lead-in.
          </Card.Text>
          
          <div className={classes.BlogLinks}>
            <div>
            <svg data-testid="FavoriteBorderOutlinedIcon"></svg>
            </div>
            <div>
            <a href="#">Share</a>
            <a href="#">Learn More</a>
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
};
export default BlogList;
