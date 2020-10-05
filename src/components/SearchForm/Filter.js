import React from "react";

export default function Filter(props) {
  return (
    <>
      <select className="printType" onChange={props.printTypeChange}>
        <option value="all">all</option>
        <option value="books">books</option>
        <option value="magazines">magazines</option>
      </select>
      <select className="bookType" onChange={props.filterChange}>
        <option value="partial">partial</option>
        <option value="full">full</option>
        <option value="free-ebooks">free-ebooks</option>
        <option value="paid-ebooks">paid-ebooks</option>
        <option value="ebooks">ebooks</option>
      </select>
    </>
  );
}
