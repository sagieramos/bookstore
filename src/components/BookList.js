import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/booksSlice';
import './BookList.scss';

const BookList = () => {
  const books = useSelector((store) => store.book.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.itemId} book={book} />
        ))}
      </div>
      <div>
        <BookForm />
      </div>
    </div>
  );
};

export default BookList;
