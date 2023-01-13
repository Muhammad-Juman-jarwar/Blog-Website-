import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import NewsLetter from "./components/newsletter/NewsLetter";
import Blog from "./pages/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
  <React.Fragment>
    <Navbar />
    <Header />
    <NewsLetter />
    <Blog />
    <Footer />
  </React.Fragment>
  );
}

export default App;
