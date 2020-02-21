import React from "react";
import './Home.css';


export default class Home extends React.Component {
  render() {
    let details = {
      description : "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
      author_img : "https://www.cheatsheet.com/wp-content/uploads/2019/03/jk-rowling.jpg",
      books_cover : "https://i.imgur.com/i60csTi.jpg",
    }

    return (
      <div id="home">
        <div>
          <h3 className="description">{details.description}</h3>
          <img src={details.author_img} className="author-img" alt="J.K. Rowling photo" />
        </div>

        <img src={details.books_cover} className="img-cover" alt="Books cover" />   

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    )
  }
}

// export default function App() {
// 
//   return (
//     <Router>
//       <div>
//         

//         <div className="About">
//           <h3 className="description">{details.description}</h3>
//           <img src={details.author_img} alt="J.K. Rowling photo" />
//         </div>

//         <img src={details.books_cover} itemID="books-cover" alt="Books cover"/>
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/Books">
//             <Books />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//         <img src={logo} className="App-logo" alt="logo" />
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Books() {
//   return <h2>Books here</h2>;
// }


// function App() {
//   let details = {
//     description : "Harry Potter is a series of fantasy novels written by British author <br /> J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
//     author_img : "https://www.cheatsheet.com/wp-content/uploads/2019/03/jk-rowling.jpg",
//     books_cover : "https://i.imgur.com/i60csTi.jpg",
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <ul>
//           <li><a href="App.js">Home</a></li>
//           <li><a href="Books.js">Books</a></li>
//         </ul>
//       </header>

//       <div className="About">
//         <h3 className="description">{details.description}</h3>
//         <img src={details.author_img} alt="J.K. Rowling photo" />
//       </div>

//       <img src={details.books_cover} alt="Books cover"/>

//       <img src={logo} className="App-logo" alt="logo" />
//     </div>
//   );
// }
