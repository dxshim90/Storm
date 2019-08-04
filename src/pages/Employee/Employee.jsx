import React from "react";
import Departments from "../../assets/Departments";

class Employee extends React.Component {
  state = {
    departments: Departments.results
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
    console.log(this.state.departments);
    const {
      identifier,
      first_Name,
      last_Name,
      email
    } = this.props.location.customObject;
    return (
      <div>
        <form>
          <label>Identifier</label>
          <input type="text" value={identifier} />
          <label>First Name</label>
          <input type="text" value={first_Name} />
          <label>last Name</label>
          <input type="text" value={last_Name} />
          <label>Email</label>
          <input type="text" value={email} />
          <label>Status</label>
          <select>
            <option>Active</option>
            <option>Deleted</option>
          </select>
          <select multiple="multiple">
            {this.state.departments.map(department => (
              <option>{department.description}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default Employee;
