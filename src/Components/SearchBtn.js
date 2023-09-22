import React from "react";
import "../CSS/StyleSearch.css";
function SearchBtn() {
  return (
    <>
      <form className="SearchForm">
        <div className="rounded">
          <input
            className="SearchInput"
            type="text"
            name="searchbar"
            placeholder="Search by Unique ID/Name"
          />
          <button className="SearchBtn">
            <b> Search</b>
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBtn;
