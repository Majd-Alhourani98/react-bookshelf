import { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <form>
      <input value={title} onChange={handleChange} />
      <button>Edit</button>
    </form>
  );
}

export default BookEdit;
