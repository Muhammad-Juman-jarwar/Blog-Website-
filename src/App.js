import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import NewsLetter from "./components/newsletter/NewsLetter";
import Blog from "./pages/Blog";
import Footer from "./components/footer/Footer";
import TextImage from "./components/imageWithText/TextImage";
import TextImage2 from "./components/imageWithText/TextImage2";
import SmallSlider from "./components/smallSlider/SmallSlider";
import Features from "./pages/Features";

function App() {
  return (
  <React.Fragment>
    <Navbar />
    <Header />
    <NewsLetter />
    <TextImage />
    <Features />
    <TextImage2 />
    <Blog />
    <SmallSlider />
    <Footer />
  </React.Fragment>
  );
}

export default App;
