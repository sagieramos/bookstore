import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import './Book.scss';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookAsync } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const {
    itemId, title, author, category,
  } = book;

  const progress = Math.floor(Math.random() * 101);
  const dispatch = useDispatch();

  const handleRemove = async () => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="book-container">
      <div className="book-header">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>Remove</button>
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
            %
          </h2>
          <p>Completed</p>
        </article>
      </div>
      <div className="book-current-chapter">
        <h2>CURRENT CHAPTER</h2>
        <p>
          chapter
          {` ${Math.floor(Math.random() * 12) + 1}`}
        </p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
