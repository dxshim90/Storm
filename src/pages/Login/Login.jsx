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

  onSubmit = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = {
      username,
      password
    };
    // const request = await fetch(
    //   "https://backend-dev.storm-technologies.com/sandbox/v1/token",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Origin": "*",
    //       Accept: "application/json"
    //     },
    //     body: JSON.stringify(data)
    // }
    //the fetch return a CORS Error, belowis what i expect the server response to look like
    // );
    const response = {
      id: "225",
      name: "Enthusiastic Candidate",
      auth_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5Mjc2NDdlOC00OWZhLTQ2MTMtOWNmZS1kMzMxZTVmOTA1MmMiLCJyb2xlIjpbInJlYWQiLCJ3cml0ZSJdLCJncm91cHNpZCI6IjQxMzIiLCJ1bmlxdWVfbmFtZSI6IlN0b3JtVGVzdCIsInByaW1hcnlzaWQiOiIyMjUiLCJuYmYiOjE1NjQ4NTI5MjEsImV4cCI6MTU2NDg1NDEyMSwiaWF0IjoxNTY0ODUyOTIxfQ.URSRje-VfjjuilDjGa7hjnnMI8ljV31HZSq8eWp_7m0",
      expires_in: 1200
    };
    const string = JSON.stringify(response);
    localStorage.setItem("authuser", string);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="login">
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
