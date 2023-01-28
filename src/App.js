import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Books from './Books';
import Categories from './Categories';

const App = () => (
  <>
    <Navigation />

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<h2>404: Page not found</h2>} />
    </Routes>
  </>
);

export default App;
