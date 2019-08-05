import React from "react";
import Departments from "../../assets/Departments";
import "./Employee.css";
import { Redirect } from "react-router-dom";

class Employee extends React.Component {
  state = {
    departments: Departments.results,
    id: this.props.location.customObject.id,
    identifier: this.props.location.customObject.identifier,
    first_Name: this.props.location.customObject.first_Name,
    last_Name: this.props.location.customObject.last_Name,
    email: this.props.location.customObject.email,
    status: "",
    employee_departments: []
  };

  onChange = e => {
    console.log(e.target.options.selected);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectDepartment = e => {
    const options = e.target.options;
    let value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      employee_departments: value
    });
  };

  //Update Employee
  onSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    alert("Employee Updated");
    //   const {
    //     id,
    //     first_Name,
    //     last_Name,
    //     identifier,
    //     email,
    //     status,
    //     employee_departments
    //   } = this.state;
    //   try {
    //     // const request = await fetch(
    //     //   `https://backend-dev.storm-technologies.com/sandbox/v1/Employee/${id}`,
    //     //   {
    //     //     method: "POST",
    //     //     headers: {
    //     //       "Content-Type": "application/json",
    //     //       "Access-Control-Origin": "*",
    //     //       Accept: "application/json"
    //     //     },
    //     //     body: JSON.stringify({
    //     //   id,
    //     //   first_Name,
    //     //   last_Name,
    //     //   identifier,
    //     //   email,
    //     //   status,
    //     //   employee_departments
    //     // })
    //     // }
    //     // );
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  // async componentDidMount() {
  //   const request = fetch(
  //     "https://backend-dev.storm-technologies.com/sandbox/v1/Department"
  //   );
  //   const response = request.json();
  //   this.setState({
  //     departments: response
  //   });
  // }

  render(props) {
    if (!localStorage.authuser) {
      return <Redirect to="/" />;
    }
    const { identifier, first_Name, last_Name, email } = this.state;
    return (
      <div className="form-con">
        <form onSubmit={this.onSubmit}>
          <div className="input">
            <label>Identifier</label>
            <input
              name="Identifier"
              type="text"
              value={identifier}
              onChange={this.onChange}
            />
          </div>
          <div className="input">
            <label>First Name</label>
            <input
              name="first_Name"
              type="text"
              value={first_Name}
              onChange={this.onChange}
            />
          </div>
          <div className="input">
            <label>last Name</label>
            <input
              name="last_Name"
              type="text"
              value={last_Name}
              onChange={this.onChange}
            />
          </div>
          <div className="input">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="input">
            <label>Status</label>
            <select name="status" className="input" onChange={this.onChange}>
              <option value="Active">Active</option>
              <option value="Deleted">Deleted</option>
            </select>
          </div>
          <select
            name="employee_departments"
            onChange={this.selectDepartment}
            multiple="multiple"
          >
            {this.state.departments.map(department => (
              <option value={department.description} key={department.id}>
                {department.description}
              </option>
            ))}
          </select>
          <button type="submit" className="update">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default Employee;
