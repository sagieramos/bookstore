import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import NotFound from './NotFound';
import BookList from './BookList';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<>categories</>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
