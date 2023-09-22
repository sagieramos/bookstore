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
        <button type="button" onClick={() => console.log('Comments clicked')}>Comments</button>
        <button type="button" onClick={() => console.log('Remove clicked')}>Remove</button>
        <button type="button" onClick={() => console.log('Edit clicked')}>Edit</button>
      </div>
    </div>
    <div className="book-progress">
      <Progress value={book.progress} />
    </div>
    <div className="book-current-chapter">
      <h2>CURRENT CHAPTER</h2>
      <p>{book.chapter}</p>
      <button type="button" onClick={() => console.log('Update progress clicked')}>Update progress</button>
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
