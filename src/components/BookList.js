import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import './BookList.scss';

const BookList = () => {
  const books = useSelector((store) => store.book);

  return (
    <div>
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </div>
      <div>
        <BookForm />
      </div>
    </div>
  );
};

export default BookList;
