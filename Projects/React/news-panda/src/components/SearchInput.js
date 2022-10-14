import React from "react";
import { Link } from "react-router-dom";

const SearchInput = ({query,setQuery}) => {
  return (
    <>
      <div className="container py-2 my-2" style={{ maxWidth: "70vw" }}>
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search News Keywords"
            aria-label="Search"
            aria-describedby="search-addon"
            required
          />
          <Link
            className="input-group-text nav-link border-0"
            id="search-addon"
            to={`/search/${query}`}
          >
            <i className="fa fa-search"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
