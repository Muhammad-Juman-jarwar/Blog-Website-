import React from 'react';
import BlogList from './BlogList';
import classes from './Blog.module.css';
import { CardGroup } from 'react-bootstrap';

const Blog = () => {
  return (
    <React.Fragment>
        <h1 className={classes.MyBlogs}>My Blogs</h1>
        <CardGroup>
        <BlogList />
        <BlogList />
        <BlogList />
        </CardGroup>
    </React.Fragment>
  );
};
export default Blog;