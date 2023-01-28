import Book from './components/Book';
import Form from './components/Form';

const Books = () => (
  <div className="section-wrapper">
    <ul className="books-wrapper">
      <li><Book title="Example Book 1" author="Author 1" /></li>
      <li><Book title="Example Book 2" author="Author 2" /></li>
    </ul>
    <div className="form-wrapper">
      <Form />
    </div>
  </div>
);

export default Books;
