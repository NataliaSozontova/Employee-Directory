import React from 'react';
import Table from 'react-bootstrap/Table';

function TableHolder(props) {
  // var employees = [{ "name": "Kate", "email": "t@com" }];
  // var employees = props.employees;
  
  return (
    <div className="App">
      Table
      {console.log("inside table => " + props.employees)}
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>DOB</th>
          </tr>
        </thead>
        {/* <tbody>
          {props.employees.map(employee => (
            <tr key = {employee.id.value}>
              <td>{employee.image}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.location}</td>
              <td>{employee.dob}</td>
            </tr>
          )

          )}
        </tbody> */}
      </Table>

    </div>
  );
}

export default TableHolder;