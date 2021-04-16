import React from 'react';
import Table from 'react-bootstrap/Table';

function TableHolder(props) {
  // var employees = [{ "name": "Kate", "email": "t@com" }];
  // var employees = props.employees;
  
  return (
    <div className="App">
      
      <Table striped bordered hover>
        <thead>
          <tr>
            { <th>#</th> }
            <th>Image</th>
            <th>Name 
              <button onClick={props.handleSort }>Sort</button> 
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
                <img src = {employee.picture.thumbnail}/>
                </td>
              <td>{employee.name.first}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob.date}</td>
            </tr>
          )

          )}
        </tbody>
      </Table>

    </div>
  );
}

export default TableHolder;