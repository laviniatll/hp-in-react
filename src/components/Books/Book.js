import React from "react";
import './Book.css'

export default function Book(props) {
  return (
    <div className="book">
      <div className='book-title'>
        <h2>{props.title}</h2>
      </div>

      <div className='book-img'>
        <img src={props.img_url} className="book-img" alt="Book image" />
      </div>

      <div className='book-year'>
        <h3>{props.year}</h3>
      </div>
    </div>
  );
}