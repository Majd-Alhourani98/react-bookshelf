import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook, onEditBook }) {
  const [isEditingMode, setIsEditingMode] = useState(false);

  function handleDeleteClick() {
    onDeleteBook(book.id);
  }

  function toggleEditingMode() {
    setIsEditingMode(!isEditingMode);
  }

  function handleSubmit(id, title) {
    onEditBook(id, title);
    setIsEditingMode(false);
  }

  let content = <h3>{book.title}</h3>;

  if (isEditingMode) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      {content}

      <div className="actions">
        <span className="delete" onClick={handleDeleteClick}>
          ❌
        </span>

        <span onClick={toggleEditingMode}>✏️</span>
      </div>
    </div>
  );
}

export default BookShow;
