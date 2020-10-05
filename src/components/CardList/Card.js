import React from 'react';

export default function Card(props) {
    const { info } = props
    const authors = info.volumeInfo.authors.map(author => <p key={author} >Author: {author}</p>)
    const price = info.saleInfo.saleability === "FOR_SALE" ? <p>Price: ${info.saleInfo.listPrice.amount}</p> : <p>Free</p>
    return (<>
        <h3>{info.volumeInfo.title}</h3>
        <img alt="Book Cover" src={info.volumeInfo.imageLinks.thumbnail}></img>
        <div>
            {authors}
            {price}
            {info.volumeInfo.description}
        </div>
    </>
    );
}