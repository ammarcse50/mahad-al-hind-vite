import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="mt-6 font-bold text-lg text-center">
        Famous Tajweed Books/Qitabs
      </h2>
      <div className="card_container mt-20 p-5 text-center md:grid md:grid-cols-2 md:gap-6 md:m-2  lg:grid-cols-4  space-x-6">
        {books.map((book) => (
          <Book book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
