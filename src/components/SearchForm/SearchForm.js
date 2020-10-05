import React from "react";
import Filter from "./Filter";

// list price -> saleInfo/listPrice.amount
// ebook -> saleInfo.isEbook
// volumeinfo : imagelinks, printType, author, description, title

export default function SearchForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmitHandler}>
        <label htmlFor="search">search</label>
        <input
          onChange={props.onChangeHandle}
          type="text"
          className="search"
          id="search"
        />
        <input type="submit" />
      </form>
      <Filter
        printTypeChange={props.printTypeChange}
        filterChange={props.filterChange}
      />
    </div>
  );
}
