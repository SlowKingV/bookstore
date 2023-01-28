import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav>
      <h1 className="head-title">Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="nav-link"><Link to="/">BOOKS</Link></li>
        <li className="nav-link"><Link to="/categories">CATEGORIES</Link></li>
      </ul>
    </nav>
  </>
);

export default Navigation;
