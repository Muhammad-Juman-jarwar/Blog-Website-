import React from 'react';
import classes from '../components/blogs/Blog.module.css';
import { CardGroup } from 'react-bootstrap';
import FeaturedBlogs from '../components/blogs/FeaturedBlogs';

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