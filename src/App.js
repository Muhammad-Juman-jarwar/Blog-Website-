import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import Home from "./pages/Home";
// import BlogDetail from "./pages/BlogDetail";
// import About from "./pages/About";
import Blogs from "./pages/Blogs";

function App() {
  return (
  <React.Fragment>
    <Navbar />
    <Blogs />
    {/* <About /> */}
    {/* <Home /> */}
    {/* <BlogDetail /> */}
    <Footer />
  </React.Fragment>
  );
}

export default App;
