import React from "react";
import Logo from "../../assets/StormLogo.png";
import "./AppNac.css";
import { Button, ButtonGroup } from "reactstrap";

const AppNav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="logo">
        <img src={Logo} width="100" height="80" alt="" />
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/employees">Employees</a>
        </li>
        <li className="push">
          <Button>Logout</Button>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
