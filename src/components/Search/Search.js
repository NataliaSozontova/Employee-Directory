import React from 'react';

function Search(props) {
    return (
      <div className="searchbox">
      <form className="form-inline">
          <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              onChange={event => props.handleSearch(event)}
          />
          {/* <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
           </button> */}
      </form>
  </div>
    );
  }
  
  export default Search;