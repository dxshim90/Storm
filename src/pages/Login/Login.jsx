import React from "react";
import "./Login.css";
import Logo from "../../assets/StormLogo.png";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {};

  render() {
    return (
      <div class="login">
        <div>
          <img src={Logo} alt="" />
        </div>
        <input
          name="username"
          type="text"
          placeholder="Username"
          id="username"
          value="StormTest"
          onChange={this.onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          id="password"
          value="-!NmmQR2pbmJSQ7"
          onChange={this.onChange}
        />
        <input type="submit" value="Login" onClick={this.onSubmit} />
      </div>
    );
  }
}

export default Login;
