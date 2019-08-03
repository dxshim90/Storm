import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

const Layout = () => {
  return (
    <Router>
      <AppNav />
      <Content />
      <Footer />
    </Router>
  );
};

export default Layout;
