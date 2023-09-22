import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import BookForm from './BookForm';

function BookList() {
  const books = [
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      type: 'Fiction',
      progress: 42,
      chapter: 'Chapter 8',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      type: 'Fiction',
      progress: 75,
      chapter: 'Chapter 14',
    },
    {
      title: '1984',
      author: 'George Orwell',
      type: 'Science Fiction',
      progress: 90,
      chapter: 'Chapter 12',
    },
  ];

  return (
    <div>
      <div className="book-list">
        {books.map((book) => (
          <Book key={uuidv4()} book={book} />
        ))}
      </div>
      <div>
        <BookForm />
      </div>
    </div>
  );
}

export default BookList;
