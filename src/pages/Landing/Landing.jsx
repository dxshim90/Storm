import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const getUser = localStorage.getItem("authuser");
  const parseUser = JSON.parse(getUser);
  if (localStorage.authuser) {
    return <h1>{`You are logged in as ${parseUser.name}`}</h1>;
  } else {
    return (
      <div className="landing-con">
        <Link to="/login">
          <Button className="btn">Login</Button>
        </Link>
      </div>
    );
  }
};

export default Landing;
