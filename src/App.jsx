import React from 'react';
import Home from './pages/Home';
import SolutionsPage from './pages/SolutionsPage/SolutionsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<SolutionsPage />} />
      </Routes >
    </BrowserRouter >
  );
}

export default App;
