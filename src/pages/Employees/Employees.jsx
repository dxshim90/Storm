import React from "react";
import Data from "../../assets/Data";
import EmployeeTable from "../../Components/EmployeeTable/EmployeeTable";
import "./Employees.css";
import { Redirect } from "react-router-dom";

class Employees extends React.Component {
  state = {
    employees: Data,
    searchTerm: ""
  };

  // async componentDidMount() {
  //   const request = await fetch(
  //     "https://backend-dev.storm-technologies.com/sandbox/v1/Employee?pageSize=1000&Include=EmployeeDepartments&Include=EmployeeDepartment&mode=print"
  //   );
  //   const response = request.json();
  //   this.setState({
  //     employees: response
  //   });
  // }

  onChange = e => {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    if (!localStorage.authuser) {
      return <Redirect to="/" />;
    }
    const filter = this.state.employees.results.filter(employee => {
      return employee.first_Name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    return (
      <div className="employee-con">
        <input
          placeholder="Search..."
          type="text"
          onChange={this.onChange}
          value={this.state.searchTerm}
        />
        <EmployeeTable data={filter} />
      </div>
    );
  }
}

export default Employees;
