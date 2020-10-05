import React from "react";

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
      <select className="printType">
        <option>Book</option>
        <option>eBook</option>
      </select>
      <select className="bookType">
        <option>Free</option>
        <option>Paid</option>
      </select>
    </div>
  );
}
