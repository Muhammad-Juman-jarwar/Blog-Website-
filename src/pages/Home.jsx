import React from "react";
import Header from "../components/header/Header";
import NewsLetter from "../components/newsletter/NewsLetter";
import Blog from "../components/blogs/Blog";
import TextImage from "../components/imageWithText/TextImage";
import TextImage2 from "../components/imageWithText/TextImage2";
import SmallSlider from "../components/smallSlider/SmallSlider";
import Features from "../components/blogs/Features";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <NewsLetter />
      <TextImage />
      <Features />
      <TextImage2 />
      <Blog />
      <SmallSlider />
    </React.Fragment>
  );
};
export default Home;
