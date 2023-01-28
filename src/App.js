import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Books from './Books';

const App = () => (
  <>
    <Navigation />

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<h2>This is the Categories page</h2>} />
      <Route path="*" element={<h2>404: Page not found</h2>} />
    </Routes>
  </>
);

export default App;
