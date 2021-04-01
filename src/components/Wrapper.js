import React from "react";
import TableHolder from './TableHolder';
import Search from './Search';
import axios from 'axios';

// By extending the React.Component class, Wrapper inherits functionality from it
class Wrapper
 extends React.Component {
  // Setting the initial state of the Wrapper
   component
  state = {
    count: 0
  };

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=100').then(response => {
       console.log(response);
      });
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        Hello
        <Search>
                
            </Search>  
        <TableHolder>
            
        </TableHolder>
      </div>
    );
  }
}


export default Wrapper
;
