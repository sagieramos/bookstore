import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import NotFound from './NotFound';
import BookList from './BookList';
import NavLinks from './NavLinks';

const App = () => (
  <BrowserRouter>
    <NavLinks />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<div id="comming-soon">Comming soon</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
