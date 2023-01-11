import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Blog from "./pages/Blog";

function App() {
  return (
  <React.Fragment>
    <Navbar />
    <Header />
    <Blog />
  </React.Fragment>
  );
}

export default App;
