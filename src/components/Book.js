import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Progress from './Progress';
import './Book.scss';

const Book = ({ book }) => {
  const {
    item_id: itemId, title, author, category,
  } = book;
  console.log(itemId);
  const dispatch = useDispatch();

  return (
    <div className="book-container">
      <div className="book-header">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <Progress value={Math.floor(Math.random() * 101)} />
      </div>
      <div className="book-current-chapter">
        <h2>CURRENT CHAPTER</h2>
        <p>
          chapter
          {` ${Math.floor(Math.random() * 12)}`}
        </p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
