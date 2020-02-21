import React from "react";
import './Book.css'

export default function Book(props) {
  return (
    <div className="book">
      <div className='col-md-3 book-title'>
        <h2>{props.title}</h2>
      </div>

      <div className='col-md-6 book-img'>
        <img src={props.img_url} className="book-img" alt="Book image" />
      </div>

      <div className='col-md-3 book-year'>
        <h3>{props.year}</h3>
      </div>
    </div>
  );
}