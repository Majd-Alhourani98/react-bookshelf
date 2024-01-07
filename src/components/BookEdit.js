import { useState } from "react";

function BookEdit({ book, onEditBook }) {
  const [title, setTitle] = useState(book.title);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onEditBook(book.id, title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange} />
      <button>Edit</button>
    </form>
  );
}

export default BookEdit;
