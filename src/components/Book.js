import PropTypes from 'prop-types';

import './styles/Book.css';

const Book = ({ title, author }) => (
  <>
    <h2 className="book-title">{title}</h2>
    <em>{author}</em>
    <button className="remove-button" type="button">Remove</button>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
