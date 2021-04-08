import React, {Component} from "react";
import TableHolder from '../TableHolder/TableHolder';
import Search from '../Search/Search';
import Header from '../Header/Header';
import axios from 'axios';

// By extending the React.Component class, Wrapper inherits functionality from it
class Wrapper extends Component {
  // Setting the initial state of the Wrapper
 
  state = {
    //  employees: [{"name":"kate"}]
    employees: null
  };

  componentDidMount(){
    // axios.get('https://randomuser.me/api/?results=100').then(response => {
    //    console.log(" reswponce is - " + response);
    //   });
    axios.get('https://randomuser.me/api/?results=10')
    .then(response => {
      console.log(response.data.results)
      this.setState({employees: response.data.results}, console.log(this.state));
      // response.data.results.map(employee => ({
      //   image: `${employee.picture.medium}`,
      //   name: `${employee.name.first} ${employee.name.last}`,
      //   email: `${employee.email}`,
      //   phone: `${employee.phone}`,
      //   location: `${employee.location.street} ${employee.location.city} ${employee.location.state} ${employee.location.postcode}`,
      //   dob: `${employee.dob.date}`
      // }));
  });
    // this.getEmployees();
  }

  // getEmployees = () =>  {
  //     axios.get('https://randomuser.me/api/?results=10')
  //     .then(response => {
  //       console.log(response.data.results)
  //       this.setState({employees: response.data.results}, console.log(this.state));
        // response.data.results.map(employee => ({
        //   image: `${employee.picture.medium}`,
        //   name: `${employee.name.first} ${employee.name.last}`,
        //   email: `${employee.email}`,
        //   phone: `${employee.phone}`,
        //   location: `${employee.location.street} ${employee.location.city} ${employee.location.state} ${employee.location.postcode}`,
        //   dob: `${employee.dob.date}`
        // }));
  //   });
  // }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Header>Hello</Header>
        Hello test
        <Search/>
                
         
        <TableHolder
            employees = {this.state.employees} />
      
      </div>
    );
  }
}


export default Wrapper;
