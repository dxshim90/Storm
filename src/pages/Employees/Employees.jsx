import React from "react";
import Data from "../../assets/Data";
import EmployeeTable from "../../Components/EmployeeTable/EmployeeTable";

class Employees extends React.Component {
  state = {
    employees: Data
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

  // async componentDidMount() {
  //   this.setState({
  //     employees: Data
  //   });
  // }

  render() {
    return (
      <div>
        <EmployeeTable data={this.state.employees} />
      </div>
    );
  }
}

export default Employees;
