import React from "react";
import Logo from "../../assets/StormLogo.png";
import "./AppNac.css";
import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class AppNav extends React.Component {
  state = {
    isloggedin: false
  };
  logOut = () => {
    localStorage.removeItem("authuser");
    this.setState({
      logout: false
    });
  };
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="logo">
          <img src={Logo} width="100" height="80" alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employees">Employees</Link>
          </li>
          <li className="push">
            {localStorage.authuser ? (
              <Button onClick={this.logOut}>Logout</Button>
            ) : (
              <Link to="/login">
                <Button className="btn">Login</Button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default AppNav;
