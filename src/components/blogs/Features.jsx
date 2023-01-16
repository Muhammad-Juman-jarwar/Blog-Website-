import React from 'react';
import classes from './Blog.module.css';
import { CardGroup } from 'react-bootstrap';
import FeaturedBlogs from './FeaturedBlogs';

const Features = () => {
  return (
    <React.Fragment>
        <h1 className={classes.MyBlogs}>Featured Blogs</h1>
        <CardGroup>
        <FeaturedBlogs />
        <FeaturedBlogs />
        <FeaturedBlogs />
        </CardGroup>
    </React.Fragment>
  );
};
export default Features;