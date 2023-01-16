import React from "react";
import iguana from "../components/blogs/iguana.jpg";
import classes from "../components/blogs/Blog.module.css";

const BlogDetail = () => {
  return (
    <React.Fragment>
      <h1 className='text-decoration-underline text-center my-4 py-3'>
        Blog Details
      </h1>
      <div className={classes.blogDetailsDiv}>
        <h2 className={classes.title}>
          Why iguana keeps on changing its color
        </h2>
        <div className={classes.AuthorDatePara}>
          <p className={classes.Author}>By Mehran Jarwar</p>
          <p className={classes.Date}>Date: 12/12/2020</p>
        </div>
        <div className={classes.blogDetailImage}>
          <img
            src={iguana}
            className='rounded mx-auto d-block img-fluid '
            alt='...'
          />
        </div>
        <p className={classes.longpara}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eos est
          corporis tempora, fuga magnam et asperiores exercitationem eum at
          suscipit architecto nam delectus vitae, voluptates aliquid ducimus
          aliquam rem perferendis nesciunt placeat. Temporibus iusto voluptas
          dolore magnam maiores expedita corrupti! Deserunt cum debitis minus
          deleniti aspernatur laudantium alias consectetur velit, excepturi
          asperiores reprehenderit blanditiis, veritatis, magni hic sed omnis
          voluptate! Soluta at placeat maiores, provident tenetur facilis
          deserunt rerum sunt accusantium unde velit atque natus quasi quas
          consequuntur beatae, vel magni dicta. Illum, repellendus! Vitae ut
          possimus provident, unde a repudiandae modi ad aliquid earum nam animi
          labore voluptatem eveniet exercitationem consectetur eum commodi
          voluptate nihil sed sapiente, culpa sint hic nobis. Ipsum quis
          cupiditate rerum dignissimos, laudantium saepe. Exercitationem cumque
          neque consectetur animi totam est sapiente numquam dolore sunt,
          incidunt dolor recusandae, dicta doloribus ex dolorem, quis
          perspiciatis consequuntur ullam doloremque! Porro libero sequi
          molestias. Omnis, necessitatibus ducimus!
        </p>
      </div>
      <div>
        <div className={classes.footericons}>
          <h4>Share Now</h4>
          <a href='#'>
            <i className='fa-brands fa-facebook-f' />
          </a>
          <a href='#'>
            <i className='fa-brands fa-twitter' />
          </a>
          <a href='#'>
            <i className='fa-brands fa-linkedin-in' />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BlogDetail;
