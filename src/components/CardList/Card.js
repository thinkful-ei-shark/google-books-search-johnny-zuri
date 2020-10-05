import React from "react";

export default function Card(props) {
  const { info } = props;
  // const authors =
  //   info.volumeInfo.authors.length > 0 ? (
  //     info.volumeInfo.authors.map((author) => (
  //       <p key={author}>Author: {author}</p>
  //     ))
  //   ) : (
  //     <p>Author(s) none</p>
  //   );
  const authors = info.volumeInfo.authors;
  const price =
    info.saleInfo.saleability === "FOR_SALE" ? (
      <p>Price: ${info.saleInfo.listPrice.amount}</p>
    ) : (
      <p>Free</p>
    );

  return (
    <div style={{ border: "1px solid black", marginTop: "5%" }}>
      <h3>{info.volumeInfo.title}</h3>
      <img alt="Book Cover" src={info.volumeInfo.imageLinks.thumbnail}></img>
      <div>
        {authors}
        {price}
        {info.volumeInfo.description}
      </div>
    </div>
  );
}
