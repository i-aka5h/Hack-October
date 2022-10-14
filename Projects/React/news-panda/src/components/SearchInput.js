import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ query, setQuery }) => {
  const [_query, set_query] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    setQuery(_query)
    navigate(`/search/${_query}`)
  }

  useEffect(() => {
    set_query(query)
  }, [query])

  return (
    <>
      <div className="container py-2 my-2" style={{ maxWidth: "70vw" }}>
        <div className="input-group rounded">
          <input
            type="search"
            className="form-control rounded"
            value={_query}
            onChange={(e) => set_query(e.target.value)}
            placeholder="Search News Keywords"
            aria-label="Search"
            aria-describedby="search-addon"
            required
          />
          <button
            className="input-group-text nav-link border-0"
            id="search-addon"
            onClick={handleSearch}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
