import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';

const App = () => (
  <>
    <Navigation />

    <Routes>
      <Route path="/" element={<h2>This is the Books page</h2>} />
      <Route path="/categories" element={<h2>This is the Categories page</h2>} />
      <Route path="*" element={<h2>404: Page not found</h2>} />
    </Routes>
  </>
);

export default App;
