import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/booksSlice';
import './BookList.scss';
import Indicator from './Indicator';

const BookList = () => {
  const books = useSelector((store) => store.book.books);
  const statusFetch = useSelector((store) => store.book.statusFetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (statusFetch === 'loading') {
    return <div className="loading"><Indicator /></div>;
  } if (statusFetch === 'succeeded') {
    return (
      <div>
        <div className="book-list">
          {books.map((book) => (
            <Book key={books.itemId || books.item_id || uuidv4()} book={book} />
          ))}
        </div>
        <div>
          <BookForm />
        </div>
      </div>
    );
  }
  return <div>Failed to fetch data</div>;
};

export default BookList;
