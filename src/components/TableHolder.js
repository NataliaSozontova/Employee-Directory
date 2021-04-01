import React from 'react';
import Table from 'react-bootstrap/Table';

function TableHolder() {
  var employees = [{"name": "Kate", "email": "t@com"}];

    return (
      <div className="App">
           Table
          <Table striped bordered hover>
          <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    {employees.map(employee => (
      <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      
    </tr>
    )

    )}
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
          </Table>
       
      </div>
    );
  }
  
  export default TableHolder;