import Card from "react-bootstrap/Card";
import BlogImage1 from "./iguana.jpg";
import classes from "./Blog.module.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from '@mui/material/Button';

const BlogList = () => {

  const [open, setOpen] = useState(false);
  const [upArrow, setUpArrow] = useState();

  const OnClickHandler = () => {
    setOpen(!open);
    setUpArrow(!upArrow);
  };
  
  return (
    <React.Fragment>
      <Card className={classes.BloglistCard}>
        <Card.Img
          className={classes.BlogImagesCards}
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
            <a href="#"><FavoriteBorderOutlinedIcon /></a>
            <a href="#"><ShareOutlinedIcon /></a>
            <a href="#"><CommentOutlinedIcon /></a>
            </div>
            <a
              onClick={OnClickHandler}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              {upArrow ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon /> }
              </a>
          </div>
          <Collapse in={open}>
                <div className={classes.colapsetext} id="example-collapse-text">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.
                <Button variant="text">Learn More</Button>
                </div>
              </Collapse>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </React.Fragment>
  );
};
export default BlogList;
