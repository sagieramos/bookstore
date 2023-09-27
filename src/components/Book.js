import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/booksSlice';
import './Book.scss';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book }) => {
  const {
    item_id: itemId, title, author, category,
  } = book;

  const progress = Math.floor(Math.random() * 101);
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
        <div>
          <CircularProgressbar value={progress} />
        </div>
        <article>
          <h2>
            {progress}
            {' '}
            %
          </h2>
          <h4>Completed</h4>
        </article>
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
