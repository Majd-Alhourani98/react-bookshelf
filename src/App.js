import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    const updatedBook = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];

    setBooks(updatedBook);
  }

  function deleteBook(id) {
    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  }

  function editBook(id, title) {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }

      return book;
    });

    setBooks(updatedBook);
  }

  return (
    <div>
      <BookCreate onCreateBook={createBook} />
      <BookList books={books} onDeleteBook={deleteBook} onEditBook={editBook} />
    </div>
  );
}

export default App;
