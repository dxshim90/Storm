import React from "react";
import { Table } from "reactstrap";
import "./EmployeeTable.css";
import { Link } from "react-router-dom";

class EmployeeTable extends React.Component {
  renderTableData = props => {
    return this.props.data.map(employee => {
      const name = `${employee.first_Name} ${employee.last_Name}`;
      return (
        <tr className="row" key={employee.id}>
          <Link
            to={{
              pathname: `/employee/${employee.id}`,
              customObject: employee
            }}
          >
            <td>{employee.identifier}</td>
          </Link>
          <td>{name}</td>
          <td>{employee.email}</td>

          <td>{employee.createdDate}</td>
        </tr>
      );
    });
  };

  render(props) {
    return (
      <div className="table">
        <Table bordered>
          <thead>
            <tr>
              <th>Identifier</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Departments</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeTable;
