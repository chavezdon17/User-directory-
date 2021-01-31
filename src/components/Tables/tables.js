import React from "react";
import Employee from "../employee/employee.js";
class Tables extends React.Component {
  render() {
    return (
      <div>
        <div> Employee list </div>
        {this.props.employees.map(Employee)}
      </div>
    );
  }
}

export default Tables;
