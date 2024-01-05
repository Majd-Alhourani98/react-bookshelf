import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    const updatedBook = [...books, { id: 123, title }];
    setBooks(updatedBook);
  }

  return (
    <div>
      {books.length}
      <BookCreate onCreateBook={createBook} />
    </div>
  );
}

export default App;
