import React from 'react';
import './style.css';

function Search(props) {
    return (
      <div className="searchbox">
      <form className="form-inline">
          <input
              className="form-control"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              onChange={event => props.handleSearch(event)}
          />
      </form>
  </div>
    );
  }
  
  export default Search;