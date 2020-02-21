import React from "react";
import './Books.css';
import Book from "./Book";


export default class Books extends React.Component {
  render() {
    let books = [{
      id: 1,
      title: "Harry Potter and the Philosophers Stone",
      year: 1997,
      img_url: 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_23gvk690/def_height/500/def_width/500/version/100012/type/1',
    },
    {
      id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      year: 1998,
      img_url: 'https://i.pinimg.com/originals/87/5b/e0/875be0aea02180e0d91b72cdc1b97177.jpg',
    },
    {
      id: 3,
      title: 'Harry Potter and the Prisoner of Azkaban',
      year: 1999,
      img_url: 'https://ewedit.files.wordpress.com/2016/09/9781408855676.jpg?w=409',
    },
    {
      id: 4,
      title: 'Harry Potter and the Goblet of Fire',
      year: 2000,
      img_url: 'https://playone.com.lb/images/detailed/2329/81t2CVWEsUL.jpg',
    },
    {
      id: 5,
      title: 'Harry Potter and the Order of the Phoenix',
      year: 2003,
      img_url: 'https://images-na.ssl-images-amazon.com/images/I/81yheYBjiuL.jpg',
    },
    {
      id: 6,
      title: 'Harry Potter and the Half-Blood Prince',
      year: 2005,
      img_url: 'https://i0.books-express.ro/be/9781408855706/harry-potter-and-the-half-blood-prince.jpg',
    },
    {
      id: 7,
      title: 'Harry Potter and The Deathly hallows',
      year: 2007,
      img_url: 'https://whatdewhat.com/wp-content/uploads/2017/06/image-mcmbuzz.com_.jpg',
    }];

    function test(){

    }

    return (
      <div id="background">
        <div className="title">
          <h1>Harry Potter Books</h1>
        </div>

        <div id="books">
          {books.map(function(book) {
            return (
              <Book title={book.title}
                    img_url={book.img_url}
                    year={book.year} />
            )
          })}
        </div>
      </div>
    )
  }
}
