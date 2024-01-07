import BookShow from "./BookShow";

function BookList({ books, onDeleteBook, onEditBook }) {
  const renderedBooks = books.map((book) => (
    <BookShow
      key={book.id}
      book={book}
      onDeleteBook={onDeleteBook}
      onEditBook={onEditBook}
    />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
