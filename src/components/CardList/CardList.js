import React from "react";
import Card from "./Card";

import "./Card.css";

// list price -> saleInfo/listPrice.amount
// ebook -> saleInfo.isEbook
// volumeinfo : imagelinks, printType, author, description, title

export default function CardList(props) {
  let cards = props.books.map((book) => {
    return <Card key={book.id} info={book} />;
  });

  return <div className="card">{cards}</div>;
}
