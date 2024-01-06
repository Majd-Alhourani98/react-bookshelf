import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    const updatedBook = [...books, { id: 123, title }];
    setBooks(updatedBook);
  }

  return (
    <div>
      <BookCreate onCreateBook={createBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
