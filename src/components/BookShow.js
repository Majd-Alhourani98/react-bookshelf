function BookShow({ book, onDeleteBook }) {
  function handleDeleteClick() {
    onDeleteBook(book.id);
  }

  return (
    <div className="book-show">
      {book.title}

      <span className="delete" onClick={handleDeleteClick}>
        ❌
      </span>
    </div>
  );
}

export default BookShow;
