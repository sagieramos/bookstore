import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';
import './Book.scss';

const Book = ({ book }) => (
  <div className="book-container">
    <div className="book-header">
      <h3>{book.type}</h3>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <div className="book-actions">
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <Progress value={book.progress} />
    </div>
    <div className="book-current-chapter">
      <h2>CURRENT CHAPTER</h2>
      <p>{book.chapter}</p>
      <button type="button">Update progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
