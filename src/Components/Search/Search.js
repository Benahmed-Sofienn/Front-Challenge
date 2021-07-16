import React from "react";
import "./Search";

const Search = ({ handleChangeFilterByName }) => {
  return (
    <div className="Search">
      <form>
        <input placeholder="Search" onChange={handleChangeFilterByName}></input>
      </form>
    </div>
  );
};

export default Search;
