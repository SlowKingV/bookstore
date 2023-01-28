import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <h3>{title}</h3>
    <em>{author}</em>
    <button type="button">Remove</button>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
