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
    employees: [],
    filteredUsers: [],
    sort: "desc"
  };

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=50&nat=us')
    .then(response => {
      console.log(response.data.results) 
      this.setState({employees: response.data.results, filteredUsers: response.data.results});
  });  
  }

  //search by first name function
  handleSearch = (event) => {
    const filtered = this.state.employees.filter(
      employee => employee.name.first.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0);
    console.log("filters users " + filtered); 
    this.setState({filteredUsers: filtered});
    console.log("firstname => " + this.state.employees[0].name.first.toLowerCase().indexOf(event.target.value.toLowerCase()));

  }

  // if (this.state.sort === "desc") {
  //   const filteredUsers = // Sort desc here
  //   this.setState({...state, filteredUsers, sort: 'asc"})
  // } else {
  //   const filteredUsers = // Sort asc here
  //   this.setState({...state, filteredUsers, sort: 'desc"})
  // }
  //sort by first name function
  handleSort = (event) => {
    console.log("state for sort =>" + this.state.sort);
    console.log("clicking on sort");

    if(this.state.sort === 'desc'){
      const sortedUsers = this.state.filteredUsers.sort(function(a, b) {
        var nameA = a.name.first.toLowerCase(); 
        var nameB = b.name.first.toLowerCase(); 
        if (nameA < nameB) {
          console.log("sorting acs");
          return -1;
        }
      });
        this.setState({filteredUsers: sortedUsers, sort: 'acs'});
        console.log("state for sort =>" + this.state.sort);
    
   } else {
    const sortedUsers = this.state.filteredUsers.sort(function(a, b) {
      var nameA = a.name.first.toLowerCase(); 
      var nameB = b.name.first.toLowerCase(); 
      if (nameA > nameB) {
        console.log("sorting desc");
        return 1;
      }
    });
      this.setState({filteredUsers: sortedUsers, sort: 'desc'});
      console.log("state for sort =>" + this.state.sort);
  
  }git
     
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        <Header></Header>
        <Search handleSearch = {this.handleSearch}/>  
        <TableHolder
            employees = {this.state.filteredUsers} 
             handleSort = {this.handleSort} />
      </div>
    );
  }
}


export default Wrapper;
