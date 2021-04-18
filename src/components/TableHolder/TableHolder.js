import React from 'react';
import Table from 'react-bootstrap/Table';
import './style.css';

function TableHolder(props) {
  
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name
              <button class="button" onClick={props.handleSort }>Sort</button> 
              </th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
            <tr key = {employee.id.value}>
              <td> 
                <img alt="employee" src = {employee.picture.thumbnail}/>
                </td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob.date.substring(0, employee.dob.date.indexOf("T"))}</td>
            </tr>
          )
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TableHolder;