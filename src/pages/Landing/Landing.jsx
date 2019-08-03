import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-con">
      <Link to="/login">
        <Button className="btn">Login</Button>
      </Link>
    </div>
  );
};

export default Landing;
