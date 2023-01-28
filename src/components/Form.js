import './styles/Form.css';

const Form = () => (
  <>
    <form className="add-form" action="#">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <input className="form-input" type="text" placeholder="Book title" />
      <input className="form-input" type="text" placeholder="Author" />
      <input className="form-input" type="submit" value="ADD BOOK" />
    </form>
  </>
);

export default Form;
