import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    //  A functions that is called when a user submits the form
    // onEditBook(book.id, title);
    // onToggleEditingMode();

    onSubmit(book.id, title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange} />
      <button>Edit</button>
    </form>
  );
}

export default BookEdit;
