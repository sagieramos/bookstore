import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import NotFound from './NotFound';
import BookList from './BookList';
import NavLinks from './NavLinks';
import Categories from './Categories';

const App = () => (
  <BrowserRouter>
    <NavLinks />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
